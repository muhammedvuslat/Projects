# Generated by Django 4.1.7 on 2023-02-22 20:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pizzas', '0002_alter_order_size'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='quantiy',
            new_name='quantity',
        ),
    ]
