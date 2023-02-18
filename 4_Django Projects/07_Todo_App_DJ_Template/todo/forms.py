from django import forms
from .models import Todo

class TodoForm(forms.ModelForm):
    class Meta:
        model = Todo    
        exclude=[] #! Gösterilmemesini istediğimiz fieldsları excuşude ile bildiririz boş olması fields='__all__' eş anlamlıdır.
