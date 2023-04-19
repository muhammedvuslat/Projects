from django.db import models

class Courses(models.Model):
    id = models.CharField(max_length=6, unique=True, primary_key=True)
    course_name = models.CharField(max_length=50, unique=True)

    class Meta:
        verbose_name = "Course"
        verbose_name_plural = "Courses"

    def __str__(self):
        return f"{self.id} - {self.course_name}"

class Students(models.Model):
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    dob = models.DateField(blank=True, null=True)
    courses = models.ManyToManyField(Courses, related_name="students")

    class Meta:
        verbose_name = "Student"
        verbose_name_plural = "Students"

    def __str__(self):
        return f"{self.id} - {self.first_name} {self.last_name}"






