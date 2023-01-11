from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Category, Blog
from .serializer import CategorySerializer, BlogSerializer
# from rest_framework import filters #! search filter i.in global import yapıldı fakat local istendiğinde filters import edilp filter_backends = [filters.SearchFilter] değişkeni atandığından local olarak kullanılabilinir
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .permissions import IsAdminOrReadOnly



class CategoryView(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    filterset_fields = ['name']
    search_fields= ['name']
    permission_classes = [IsAdminOrReadOnly] 
    filterset_fields = ['name']




class BlogView(ModelViewSet):
    queryset= Blog.objects.all()
    serializer_class = BlogSerializer
    filterset_fields = ['category']
    search_fields = ['title','content']
    permission_classes = [IsAuthenticatedOrReadOnly]




