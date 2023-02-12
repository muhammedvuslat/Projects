from django.db import models
from django.contrib.auth.models import User
from django.core.validators import RegexValidator #! Regex telefon numarası için

class CreatedUpdatedClass(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class Category(models.Model):
    name = models.CharField(max_length=20)
    def __str__(self):
        return f'Category = {self.name}'
    
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
    
class Brand(models.Model):
    name = models.CharField(max_length=25, unique=True)
    image = models.TextField()

    def __str__(self):
        return f'Brand = {self.name}'

class Product(CreatedUpdatedClass):
    name = models.CharField(max_length=20, unique=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products_category')
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, related_name='products_brand')
    stock = models.PositiveSmallIntegerField(blank=True, default=0)

    def __str__(self):
        return f'Product = {self.name}'

class Firm(CreatedUpdatedClass):
    phone_regex = RegexValidator(
        regex=r'^\+?1?\d{9,15}$', 
        message="Telefon numarası şu biçimde girilmelidir:'+XXXXXXX' 9 ile 15 karakter arasında olması gerekir."
    )
    name = models.CharField(max_length=20)
    phone = models.CharField(validators=[phone_regex],max_length=17,blank=True)
    adress = models.TextField(max_length=200)
    image = models.TextField()

    def __str__(self):
        return f'Firm = {self.name}'
    
class Purchases(CreatedUpdatedClass):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    firm = models.ForeignKey(Firm, on_delete=models.SET_NULL, null=True, related_name='firm_purchases')
    brand = models.ForeignKey(Brand, on_delete=models.SET_NULL, null=True, related_name='brand_purchases')
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True, related_name='product_purchases')
    quantity = models.PositiveSmallIntegerField()
    price = models.DecimalField(
        max_digits=8,
        decimal_places=2
        )
    price_total = models.DecimalField(
        max_digits=8,
        decimal_places=2,
        blank=True
    )

    class Meta:
        verbose_name = 'Purchases'
        verbose_name_plural = 'Purchases'

    def __str__(self):
        return f'Purchases({self.product} & {self.quantity})'
 
class Sales(CreatedUpdatedClass):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    brand = models.ForeignKey(Brand, on_delete=models.SET_NULL, null=True, related_name='brand_sales')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_sales')
    quantity = models.PositiveSmallIntegerField()
    price = models.DecimalField(
        max_digits=8,
        decimal_places=2
        )
    price_total = models.DecimalField(
        max_digits=8,
        decimal_places=2,
        blank=True
    )

    class Meta:
        verbose_name = 'Sales'
        verbose_name_plural = 'Sales'

    def __str__(self):
        return f'Sales({self.product} & {self.quantity})'

