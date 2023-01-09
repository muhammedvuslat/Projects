from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=25, unique=True)

    def __str__(self):
        return self.name

class Blog(models.Model):
    Status_Choices = (
        ("p","Published"),
        ("d","Draft")
    )
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    title = models.CharField(unique=True, max_length=25)
    content = models.TextField()
    status = models.CharField(choices=Status_Choices,default="d", max_length=20)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title} |{self.get_status_display()}|"