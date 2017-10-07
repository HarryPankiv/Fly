from django.db import models


class Flight(models.Model):
    destination = models.CharField(max_length=100)
    price = models.IntegerField(default='0')
    duration = models.CharField(max_length=150, default='0')


class Hotel(models.Model):
    city = models.CharField(max_length=100)
    stars = models.IntegerField(default='0')
    price = models.IntegerField(default='0')