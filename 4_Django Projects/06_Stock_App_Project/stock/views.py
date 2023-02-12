from django.shortcuts import render
from rest_framework import viewsets
from .models import Brand, Category, Firm, Product, Purchases, Sales
from .serializer import CategorySerializer, BrandSerializer, ProductSerializer, FirmSerializer, PurchasesSerializer, SalesSerializer

class CategoryView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class BrandView(viewsets.ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer

class ProductView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class FirmView(viewsets.ModelViewSet):
    queryset = Firm.objects.all()
    serializer_class = FirmSerializer

class PurchasesView(viewsets.ModelViewSet):
    queryset = Purchases.objects.all()
    serializer_class = PurchasesSerializer

class SalesView(viewsets.ModelViewSet):
    queryset = Sales.objects.all()
    serializer_class = SalesSerializer