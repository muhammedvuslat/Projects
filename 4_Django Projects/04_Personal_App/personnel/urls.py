from django.urls import path
from .views import DepartmentView, PersonnelView

urlpatterns = [
    path("department/", DepartmentView.as_view()),
    path("personnel/", PersonnelView.as_view())
]
