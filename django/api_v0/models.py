from django.db import models

# Create your models here.
class Flight(models.Model):
    destination = models.CharField(max_length=100)
    price = models.IntegerField(max_length=4)
    duration = models.CharField(max_length=150)



