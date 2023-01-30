from rest_framework import serializers
from .models import Car

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = (
            'plate_number',           
            'brand',            
            'model',           
            'year',            
            'gear',           
            'rent_per_day',
            'availability'
        )