from rest_framework import serializers
from .models import Car

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = (
            'id',
            'plate_number',           
            'brand',            
            'model',           
            'year',            
            'gear',           
            'rent_per_day',
            'availability'
        )
    def get_fields(self):
        fields_all = super().get_fields()
        request = self.context.get('request')

        if request.user and not request.user.is_staff:
            fields_all.pop('availability')
            fields_all.pop('plate_number')

        return fields_all