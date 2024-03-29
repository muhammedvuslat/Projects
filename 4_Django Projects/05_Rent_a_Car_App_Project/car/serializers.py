from rest_framework import serializers
from .models import Car, Reservation

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

class ReservationSerializer(serializers.ModelSerializer):

    total_price = serializers.SerializerMethodField() # Total Price işlemi için Method Field.(fields a eklenmeli)
    class Meta:
        model =  Reservation
        fields =(
            'id',
            'customer',
            'car',
            'start_date',
            'end_date',
            'total_price'
        )
        validators = [
            serializers.UniqueTogetherValidator(
                queryset = Reservation.objects.all(),
                fields= ('customer', 'start_date', 'end_date'),
                message= ('You alreday have a reservation between these dates...')
            )
        ]
    def get_total_price(self, obj): #! Oluşturulan metodun get instancenı overide ettik ve tanımlamaları gerçekleştirdir.
        return obj.car.rent_per_day * (obj.end_date - obj.start_date).days #! car modelini reservation modelinde ForingKey ile tanımlı olduğundan dolayı direkt kullanabildik.
