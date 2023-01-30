from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet
from .models import Car , Reservation
from .serializers import CarSerializer
from .permissions import IsStaffOrReadOnly


class CarView(ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    permission_classes = [IsStaffOrReadOnly,]

    def get_queryset(self):
        if self.request.is_staff:
            queryset = super().get_queryset()
        else:
            queryset = super().get_queryset.filter(availability=True)
        start_key = self.request.query_params.get('start')
        end_key = self.request.query_params.get('end')
        return super().get_queryset()

