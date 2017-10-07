from django.db import models


class City(models.Model):
    city = models.CharField(max_length=100)
    flight_price = models.IntegerField(default='0')
    flight_duration = models.CharField(max_length=150, default='0')


class Hotel(models.Model):
    city = models.ForeignKey(City, on_delete=models.SET_NULL)
    stars = models.IntegerField(default='0')
    price = models.IntegerField(default='0')


class Activity(models.Model):
    cities = models.ManyToManyField(City)
    name = models.CharField(max_length=100)
    price = models.IntegerField(default='0')
    """a1 = Activity()
    a2 = Activity()
    a3 = Activity()
    c1 = City()
    c1.activities.add(a1)
    c1.activities.add(a2)
    c1.activities.add(a3)
    a1.cities.add(c1)
    a2.cities.add(c1)
    a3.cities.add(c1)
    c2 = Flight()
    c2.add(a1)
    c2.add(a2)
    c2.add(a3)
    a1.cities.add(c2)
    a2.cities.add(c2)
    a3.cities.add(c2)
    c3 = Flight()
    c3.add(a1)
    c3.add(a2)
    c3.add(a3)
    a1.cities.add(c2)
    a2.cities.add(c2)
    a3.cities.add(c2)"""
