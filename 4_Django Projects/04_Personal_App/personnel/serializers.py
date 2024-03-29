from rest_framework import serializers, generics
from .models import Department, Personnel
from django.utils.timezone import now


class DeparmentSerializer(serializers.ModelSerializer):
    personnel_count = serializers.SerializerMethodField()

    class Meta:
        model = Department
        fields = ("id", "name", "personnel_count")

    def get_personnel_count(self, obj):
        return obj.personnels.count()


class PersonnelSerializer(serializers.ModelSerializer):

    days_since_joined = serializers.SerializerMethodField()
    create_user_id = serializers.IntegerField(required=False)
    create_user = serializers.StringRelatedField()

    class Meta:
        model = Personnel
        fields = "__all__"

    def create(self, validated_data):
        validated_data["create_user_id"] = self.context['request'].user.id
        instance = Personnel.objects.create(**validated_data)
        return instance

    def get_days_since_joined(self, obj):
        return (now() - obj.start_date).days


class DepartmentPersonnelSerializer(serializers.ModelSerializer):

    personnel_count = serializers.SerializerMethodField()
    personals = PersonnelSerializer(many=True, read_only=True)

    class Meta:
        model = Department
        fields = ("id", "name", "personnel_count", "personals")

    def get_personnel_count(self, obj):
        return obj.personals.count()
