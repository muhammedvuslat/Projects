from django.db import models
from django.contrib.auth.models import User

class Topping(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Pizza(models.Model):
    name = models.CharField(max_length=50)
    topping = models.ManyToManyField(Topping)
    image = models.ImageField(upload_to= 'pizza_pics', null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name
    

Size = (
    ('s' , 'Small'),
    ('m' , 'Medium'),
    ('l' , 'Large')
)

class Order(models.Model):
    pizza = models.ForeignKey(Pizza, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    size = models.CharField(choices=Size, default='m',max_length=1)
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return f'{self.pizza.name} order {self.user.username}'