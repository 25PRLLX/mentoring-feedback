# Generated by Django 5.0.6 on 2024-09-30 18:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('feedback', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='feedback',
            name='name',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
