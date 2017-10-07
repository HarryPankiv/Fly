from django.db import models


class City(models.Model):
    city = models.CharField(max_length=100)
    flight_price = models.IntegerField(default='0')
    flight_duration = models.CharField(max_length=150, default='0')


class Hotel(models.Model):
    city = models.ForeignKey(City, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=100)
    price = models.IntegerField(default='0')


class Activity(models.Model):
    cities = models.ManyToManyField(City)
    name = models.CharField(max_length=100)
    price = models.IntegerField(default='0')

