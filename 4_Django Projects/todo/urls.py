from django.urls import path,include

from .views import (
    #!FBV
    todo_home,
    todo_list_crate,
    todo_detail,
    #!CBV
    Todos,
    TodoDetail,
)


urlpatterns = [
    path('',todo_home),
    path('list/',todo_list_crate),
    path('detail/<int:id>',todo_detail),
    path('list_class/',Todos.as_view()),
    path('detail_class/<int:id>',TodoDetail.as_view()),
]
