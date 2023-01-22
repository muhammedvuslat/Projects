from django.shortcuts import render
from .serializers import DeparmentSerializer, PersonnelSerializer
from rest_framework import generics
from .models import Department, Personnel
from rest_framework.permissions import IsAuthenticated
from .permissions import IsStafforReadOnly


class DepartmentView(generics.ListCreateAPIView):
    queryset = Department.objects.all()
    serializer_class = DeparmentSerializer
    permission_classes = [IsAuthenticated, IsStafforReadOnly]


class PersonnelListView(generics.ListCreateAPIView):
    queryset = Personnel.objects.all()
    serializer_class = PersonnelSerializer
    permission_classes = [IsAuthenticated, IsStafforReadOnly]
