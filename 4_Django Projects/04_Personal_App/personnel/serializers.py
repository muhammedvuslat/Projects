from rest_framework import serializers
from .models import Department, Personnel


class DeparmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Department
        fields = "__all__"


class PersonnelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Personnel
        fields = "__all__"
