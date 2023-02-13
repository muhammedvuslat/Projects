from rest_framework import serializers
from .models import Brand, Category, Firm, Product, Purchases, Sales

class ProductSerializer(serializers.ModelSerializer):

    category = serializers.StringRelatedField()
    brand = serializers.StringRelatedField()
    category_id = serializers.IntegerField()
    brand_id = serializers.IntegerField()

    class Meta:
        model = Product
        fields = (
            'id',
            'name',
            'category',
            'category_id',
            'brand',
            'brand_id',
            'stock'            
        )

class CategorySerializer(serializers.ModelSerializer):
    product_count = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = (
            'id',
            'name',
            'product_count'            
        )

    def get_product_count(self,obj):
        return Product.objects.filter(category_id=obj.id).count()

class CategoryProductSerializer(serializers.ModelSerializer):
    products_category = ProductSerializer(many=True)
    product_count = serializers.SerializerMethodField()
    class Meta:
        model = Category
        fields =(
            'id',
            'name',
            'product_count',
            'products_category'
        )
    def get_product_count(self,obj):
        return Product.objects.filter(category_id=obj.id).count()
    
class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = (
            'id',
            'name',
            'image'
        )

class FirmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Firm
        fields = (
            'id',
            'name',
            'phone',
            'adress',
            'image'
        )

class PurchasesSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()
    firm = serializers.StringRelatedField()
    brand = serializers.StringRelatedField()
    product = serializers.StringRelatedField()
    firm_id = serializers.IntegerField()
    brand_id = serializers.IntegerField()
    product_id = serializers.IntegerField()

    class Meta:
        model = Purchases
        fields = (
            'id',
            'user',
            'user_id',
            'firm',
            'firm_id',
            'brand',
            'brand_id',
            'product', 
            'product_id', 
            'quantity',
            'price',
            'price_total',
            'created',
            'updated'
        )

class SalesSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()
    brand = serializers.StringRelatedField()
    product = serializers.StringRelatedField()
    user_id = serializers.IntegerField()
    brand_id = serializers.IntegerField()
    product_id = serializers.IntegerField()

    class Meta:
        model = Purchases
        fields = (
            'id',
            'user',
            'user_id',
            'brand',
            'brand_id',
            'product', 
            'product_id', 
            'quantity',
            'price',
            'price_total'
        )


    