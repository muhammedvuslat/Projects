from django.http import HttpResponse

def home(request):
    return HttpResponse('<center><h1 style="background-color:orange;">Welcome to APITodo</h1></center>')