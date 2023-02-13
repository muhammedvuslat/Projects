from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets,filters,status
from rest_framework.permissions import DjangoModelPermissions
from .models import Brand, Category, Firm, Product, Purchases, Sales
from .serializer import CategorySerializer, BrandSerializer, ProductSerializer, FirmSerializer, PurchasesSerializer, SalesSerializer,CategoryProductSerializer
from rest_framework.response import Response

class CategoryView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [DjangoModelPermissions]
    filter_backends = [filters.SearchFilter,DjangoFilterBackend]
    search_fields = ['name']
    filterset_fields = ['name']
    
    def get_serializer_class(self):
        if self.request.query_params.get('name'):
            return CategoryProductSerializer
        return super().get_serializer_class()

class BrandView(viewsets.ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    permission_classes = [DjangoModelPermissions]
    filter_backends = [filters.SearchFilter,DjangoFilterBackend]
    search_fields = ['name']
    filterset_fields = ['name']

class ProductView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [DjangoModelPermissions]
    filter_backends = [filters.SearchFilter,DjangoFilterBackend]
    search_fields = ['name','category']
    filterset_fields = ['brand','category']

class FirmView(viewsets.ModelViewSet):
    queryset = Firm.objects.all()
    serializer_class = FirmSerializer
    permission_classes = [DjangoModelPermissions]
    filter_backends = [filters.SearchFilter,DjangoFilterBackend]
    search_fields = ['name']
    filterset_fields = ['name']

class PurchasesView(viewsets.ModelViewSet):
    queryset = Purchases.objects.all()
    serializer_class = PurchasesSerializer
    permission_classes = [DjangoModelPermissions]
    filter_backends = [filters.SearchFilter,DjangoFilterBackend]
    search_fields = ['firm','product']
    filterset_fields = ['firm','product']

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        #!||||||<Yeni eklenen Productların miktarının Stock miktarına eklenmesi>||||||
        purchase = request.data
        product = Product.objects.get(id=purchase['product_id'])
        product.stock += purchase['quantity']
        product.save()
        #!||||||<Yeni eklenen Productların miktarının Stock miktarına eklenmesi>||||||


        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    
    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        #!||||||<Productların miktarının güncelenmesi>||||||
        purchase = request.data
        product = Product.objects.get(id=instance.product_id)
        update_sonuc = purchase["quantity"] - instance.quantity
        product.stock += update_sonuc
        product.save()
        #!||||||<Productların miktarının güncelenmesi>||||||



        self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            instance._prefetched_objects_cache = {}

        return Response(serializer.data)

    


    

class SalesView(viewsets.ModelViewSet):
    queryset = Sales.objects.all()
    serializer_class = SalesSerializer
    filter_backends = [filters.SearchFilter,DjangoFilterBackend]
    search_fields = ['product']
    filterset_fields = ['product']