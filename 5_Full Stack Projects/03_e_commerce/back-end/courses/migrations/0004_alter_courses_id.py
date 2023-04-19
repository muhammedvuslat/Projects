# Generated by Django 4.1.6 on 2023-04-16 10:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0003_remove_courses_course_id_alter_courses_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='courses',
            name='id',
            field=models.CharField(choices=[('CSI101', 'Introduction to Computer Science'), ('CSI102', 'Algorithms'), ('MAT101', 'Calculus'), ('PHY101', 'Physics')], max_length=6, primary_key=True, serialize=False, unique=True),
        ),
    ]