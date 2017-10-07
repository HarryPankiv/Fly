from django.db import models

class Flight(models.Model):
    destination = models.CharField(max_length=100)
    price = models.IntegerField(max_length=4)
    duration = models.CharField(max_length=150)

class Hotel(models.Model):
    city = models.CharField(max_length=100)
    stars = models.IntegerField()