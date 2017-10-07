from django.db import models


class Flight(models.Model):
    destination = models.CharField(max_length=100)
    price = models.IntegerField(default='0')
    duration = models.CharField(max_length=150, default='0')


class Hotel(models.Model):
    city = models.ForeignKey(Flight, on_delete=models.SET_NULL)
    stars = models.IntegerField(default='0')
    price = models.IntegerField(default='0')


class Activity(models.Model):
    city = models.ManyToManyField(Flight)
    price = models.IntegerField(default='0')
    """a1 = Activity()
    a2 = Activity()
    a3 = Activity()
    f1 = Flight()
    f1.add(a1)
    f1.add(a2)
    f1.add(a3)
    f2 = Flight()
    f2.add(a1)
    f2.add(a2)
    f2.add(a3)
    f3 = Flight()
    f3.add(a1)
    f3.add(a2)
    f3.add(a3)"""
