from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    display_name = models.CharField(max_length=25, blank=True, null=True)
    avatar = models.ImageField(upload_to='pictures', default='d_avatar.png')
    bio = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.user.username}'Profiles"
