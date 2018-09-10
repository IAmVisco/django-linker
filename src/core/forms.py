from django import forms
from .models import Link


class LinksForm(forms.ModelForm):
    class Meta:
        model = Link
        fields = ('name', 'link')


LinksFormset = forms.formset_factory(LinksForm, extra=1)
