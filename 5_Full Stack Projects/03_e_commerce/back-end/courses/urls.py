from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import (
    CoursesMVS,
    StudentsListView,
    StudentCreateView,
    StudentsUpdDestView
)
router = DefaultRouter()
router.register("courses", CoursesMVS)


urlpatterns = [
    path("students-list/", StudentsListView.as_view()),
    path("student-create/", StudentCreateView.as_view()),
    path("student-detail/<int:pk>/", StudentsUpdDestView.as_view()),
] + router.urls
