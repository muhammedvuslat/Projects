from django.db import models
from django.contrib.auth.models import User


class Department(models.Model):
    name = models.CharField(max_length=25)

    def __str__(self):
        return self.name


TITLE = (
        ("Team Lead", "LEAD"),
        ("Mid Lead", "MID"),
        ("Junior", "JUN"),
)

GENDER = (
    ("Female", "F"),
    ("Male", "M"),
    ("Other", "O"),
    ("Prefer Not Say", "N"),
)


class Personnel(models.Model):

    department = models.ForeignKey(
        Department, on_delete=models.SET_NULL, related_name="personnels", null=True)
    create_user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    gender = models.CharField(choices=GENDER, max_length=15)
    title = models.CharField(choices=TITLE, max_length=15)
    salary = models.IntegerField(default=1220)
    start_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.first_name} : {self.title}"
