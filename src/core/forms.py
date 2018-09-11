from django import forms
from .models import Link


class LinksForm(forms.ModelForm):
    class Meta:
        model = Link
        fields = ('name', 'link')

    def __init__(self, *arg, **kwarg):
        super(LinksForm, self).__init__(*arg, **kwarg)
        self.empty_permitted = True


LinksFormset = forms.formset_factory(LinksForm)
