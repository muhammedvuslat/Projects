from django.contrib import admin
from .models import Order,Pizza,Topping

admin.site.register(Order)
admin.site.register(Pizza)
admin.site.register(Topping)