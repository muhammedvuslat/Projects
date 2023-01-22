from django.urls import path
from .views import DepartmentView, PersonnelListView

urlpatterns = [
    path("department/", DepartmentView.as_view()),
    path("personnel/", PersonnelListView.as_view())
]
