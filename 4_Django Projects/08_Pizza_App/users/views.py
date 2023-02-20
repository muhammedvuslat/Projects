from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from .forms import UserForm, LoginForm
from django.contrib.auth import login

def register(request):
    form =UserForm()

    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
        
    context = {
        'form':form
    }

    return render(request, 'users/register.html', context)

def user_login(request):
    form = LoginForm()

    if request.method == 'POST':
        form = LoginForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request,user)
            return redirect('home')

    context = {
        'form':form
    }

    return render(request,'users/login.html',context)
