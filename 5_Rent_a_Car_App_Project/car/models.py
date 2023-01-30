from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator

class Car(models.Model):

    GEAR = (
        ('A','automatic'),
        ('M','manuel'),
    )

    plate_number = models.CharField(max_length=20)
    brand = models.CharField(max_length=25)
    model = models.CharField(max_length=25)
    year = models.IntegerField()
    gear = models.CharField(max_length= 1, choices=GEAR)
    rent_per_day = models.DecimalField(
        max_digits=7,
        decimal_places=2,
        validators=[MinValueValidator(1)]
    )
    availability = models.BooleanField(default=True)

    def __str__(self):
        return f'{self.brand} -  {self.model} - {self.plate_number}'

class Reservation(models.Model):
    customer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='customer' )
    car = models.ForeignKey(Car, on_delete=models.CASCADE, related_name='car')
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return f'Customer {self.customer} Reserveted {self.car} {self.start_date} - {self.end_date}'
    
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['customer','start_date','end_date'], name='customer_rent_date'
            )
        ]









