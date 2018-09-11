from django.shortcuts import render, redirect, render_to_response
from .models import Link
from uuid import uuid4
from .forms import LinksFormset


def index(request):
    if 'uuid' in request.COOKIES:
        return redirect(f'{request.COOKIES.get("uuid")}/')
    else:
        return redirect('create')


def create(request):
    if request.COOKIES.get("uuid") is None:
        uuid = uuid4()
        response = render_to_response('create.html', {
            'uuid': uuid, 'formset': LinksFormset()
        })
        response.set_cookie('uuid', uuid, max_age=60 * 60 * 24 * 365)
        return response
    return redirect('edit')


def edit(request):
    uuid = request.COOKIES.get("uuid")
    context = {
        'uuid': uuid
    }
    if request.method == 'GET':
        formset = LinksFormset(initial=[
            {'name': obj.name, 'link': obj.link} for obj in Link.objects.filter(owner=uuid)
        ])
        context['formset'] = formset
    elif request.method == 'POST':
        formset = LinksFormset(request.POST)
        if formset.is_valid():
            Link.objects.filter(owner=uuid).delete()
            for form in formset:
                if form.cleaned_data.get('link') is not None:
                    print(form.cleaned_data.get('link'))
                    Link(name=form.cleaned_data.get('name'),
                         link=form.cleaned_data.get('link'),
                         owner=uuid).save()
            formset = LinksFormset(initial=[
                {'name': obj.name, 'link': obj.link} for obj in Link.objects.filter(owner=uuid)
            ])
        context['formset'] = formset
    return render(request, 'edit.html', context)


def open_links(request, uuid):
    return render(request, 'main.html', {'links': Link.objects.filter(owner=uuid)})
