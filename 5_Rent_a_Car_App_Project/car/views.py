from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import ListCreateAPIView
from .models import Car, Reservation
from .serializers import CarSerializer, ReservationSerializer
from .permissions import IsStaffOrReadOnly
from django.db.models import Q
from rest_framework.permissions import IsAuthenticated


class CarView(ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    permission_classes = (IsStaffOrReadOnly,)

    def get_queryset(self):
        if self.request.user.is_staff:
            queryset = super().get_queryset()
        else:
            queryset = super().get_queryset().filter(availability=True)
        start_key = self.request.query_params.get('start')
        end_key = self.request.query_params.get('end')
        

        if start_key is not None or end_key is not None: 

            not_available = Reservation.objects.filter( 
                    Q(start_date__lt=end_key) & Q(end_date__gt=start_key)
            ).values_list('car_id', flat=True) 
            queryset = queryset.exclude(id__in=not_available) 
            print(f'Queryset{queryset}')
            print(f'Not Available{not_available}') 
        return queryset

class ReservationView(ListCreateAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
    permission_classes = [IsAuthenticated]
        
    def get_queryset(self):
            if self.request.user.is_staff:
                return super().get_queryset()
            return super().get_queryset().filter(customer = self.request.user)