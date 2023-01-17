from rest_framework import serializers
from .models import Flight , Reservation , Passenger


class FlightSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Flight
        fields = (
            'flight_number',
            'operation_airlines',
            'departure_city',
            'arrival_city',
            'date_of_departure',
            'etd'
        )

class PassengerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Passenger
        fields = "__all__"

class ReservationSerializer(serializers.ModelSerializer):

    Passenger = PassengerSerializer(many=True, required=True)
    flight = serializers.StringRelatedField()
    flight_id = serializers.IntegerField()

    user = serializers.StringRelatedField()

    class Meta:
        model = Reservation
        fields = (
            "id",
            "user",
            "flight",
            "flight_id",
            "Passenger"
        )