from django.db import models

class Item(models.Model):
    city = models.CharField(max_length = 20)
    hotel_name = models.CharField(max_length = 20)
    hotel_price = models.IntegerField()
    flight_price = models.IntegerField()
    flight_duration = models.IntegerField()
    activity_name = models.CharField(max_length = 20)
    activity_price = models.IntegerField()

