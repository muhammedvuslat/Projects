from django.shortcuts import render, redirect
from django.contrib import messages

from .models import *
from .forms import *

def todo_list(request):
    todos = Todo.objects.all()
    context = {
        'todos':todos
    }

    return render(request, 'todo/list.html',context)

def todo_add(request):
    form = TodoForm(request.POST or None)
    if form.is_valid():
        form.save()
        messages.success(request,'To do successfully entered')
        return redirect('todo_list') #!urls.py todo list için bildirdiğimiz isim
    return render(request,'todo/add.html',{'form':form}) #! todo_list için kullandığımız context yapısını 2. farklı bir yöntem olarak {'form':form} bu şekilde de kullanabiliriz

def todo_update(request,id):
    todo = Todo.objects.get(id=id)
    form = TodoForm(instance=todo)
    context = {
        'todo':todo,
        'form':form
    }
    if request.method == 'POST':
        form = TodoForm(request.POST, instance=todo)
        if form.is_valid():
            form.save()
        return redirect('todo_list')
    return render(request, 'todo/update.html',context)

def todo_delete(request,id):
    todo = Todo.objects.get(id=id)
    todo.delete()
    return redirect('todo_list')
