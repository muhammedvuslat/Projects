from django.urls import path,include
from rest_framework import routers

from .views import (
    #!FBV
    todo_home,
    todo_list_crate,
    todo_detail,
    #!CBV
    Todos,
    TodoDetail,
    #!MVS(ModelViewSet)
    TodoMVS
)

router = routers.DefaultRouter()
router.register('todomvs', TodoMVS)




urlpatterns = [
    path('',todo_home),
    #!FBV
    path('list/',todo_list_crate),
    path('detail/<int:id>',todo_detail),
    #!CBV
    path('list_class/',Todos.as_view()),
    path('detail_class/<int:id>',TodoDetail.as_view()),
    #!MVS(ModelViewSet)
    path('',include(router.urls)),
]

