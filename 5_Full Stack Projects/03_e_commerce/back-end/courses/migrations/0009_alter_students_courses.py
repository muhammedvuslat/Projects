# Generated by Django 4.1.6 on 2023-04-16 15:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0008_alter_students_dob'),
    ]

    operations = [
        migrations.AlterField(
            model_name='students',
            name='courses',
            field=models.ManyToManyField(blank=True, null=True, to='courses.courses'),
        ),
    ]