from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework.permissions import IsAdminUser
from .serializers import FlightSerializer, ReservationSerializer
from .models import Flight , Reservation
from .permissions import IsStafforReadOnly

class FlightView(viewsets.ModelViewSet):
    queryset = Flight.objects.all()
    serializer_class = FlightSerializer
    permission_classes = [IsStafforReadOnly]

class ReservationView(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer