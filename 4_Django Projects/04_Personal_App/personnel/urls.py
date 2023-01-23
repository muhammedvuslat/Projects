from django.urls import path
from .views import DepartmentView, PersonnelListView, DepartmentPersonnelView, PersonalGetUpdateDelete

urlpatterns = [
    path("department/", DepartmentView.as_view()),
    path("personnel/", PersonnelListView.as_view()),
    path("personnel/<int:pk>", PersonalGetUpdateDelete.as_view()),
    path("department/<str:department>", DepartmentPersonnelView.as_view()),
]
