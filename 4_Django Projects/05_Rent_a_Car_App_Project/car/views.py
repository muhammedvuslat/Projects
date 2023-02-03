from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Car, Reservation
from .serializers import CarSerializer, ReservationSerializer
from .permissions import IsStaffOrReadOnly
from django.db.models import Q, Exists, OuterRef
from django.utils import timezone


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

            queryset = queryset.annotate(
                is_available=~Exists(Reservation.objects.filter(
                    Q(car=OuterRef('pk')) & Q(
                        start_date__lt=end_key) & Q(end_date__gt=start_key)
                ))
            )
        return queryset

class ReservationView(ListCreateAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
    permission_classes = [IsAuthenticated]
        
    def get_queryset(self):
            if self.request.user.is_staff:
                return super().get_queryset()
            return super().get_queryset().filter(customer = self.request.user)

class ReservationDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(
            instance, data=request.data, partial=partial
        )
        serializer.is_valid(raise_exception=True)
        end = serializer.validated_data.get('end_date')
        car = serializer.validated_data.get('car')
        start = instance.start_date
        today = timezone.now().date()

        if Reservation.objects.filter(car=car).exists():
            for res in Reservation.objects.filter(car=car, end_date__gte=today):
                if start < res.start_date < end:
                    return Response({'message': 'Car is not available...'})
        return super().update(request, *args, **kwargs)




    