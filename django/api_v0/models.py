from django.db import models


class Flight(models.Model):
    destination = models.CharField(max_length=100)
    price = models.IntegerField(max_length=4, default='0')
    duration = models.CharField(max_length=150)


class Hotel(models.Model):
    city = models.CharField(max_length=100)
    stars = models.IntegerField(max_length=1, default='0')
    price = models.IntegerField(max_length=100, default='0')