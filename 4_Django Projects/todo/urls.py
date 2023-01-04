from django.urls import path,include

from .views import (
    todo_home,
    todo_list_crate,
    todo_detail
)


urlpatterns = [
    path('',todo_home),
    path('list/',todo_list_crate),
    path('detail/<int:id>',todo_detail)
]
