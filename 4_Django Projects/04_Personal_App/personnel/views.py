from django.shortcuts import render
from .serializers import DeparmentSerializer, PersonnelSerializer
from rest_framework import generics
from .models import Department, Personnel


class DepartmentView(generics.ListAPIView):
    queryset = Department.objects.all()
    serializer_class = DeparmentSerializer


class PersonnelView(generics.ListAPIView):
    queryset = Personnel.objects.all()
    serializer_class = PersonnelSerializer
