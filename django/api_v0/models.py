from django.db import models

# Create your models here.


class Hotel(models.Model):
    city = models.CharField(max_length=100)
    stars = models.IntegerField()
