# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api_v0', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('city', models.CharField(max_length=20)),
                ('hotel_name', models.CharField(max_length=20)),
                ('hotel_price', models.IntegerField()),
                ('flight_price', models.IntegerField()),
                ('flight_duration', models.IntegerField()),
                ('activity_name', models.CharField(max_length=20)),
                ('activity_price', models.IntegerField()),
            ],
        ),
        migrations.RemoveField(
            model_name='activity',
            name='cities',
        ),
        migrations.RemoveField(
            model_name='hotel',
            name='city',
        ),
        migrations.DeleteModel(
            name='Activity',
        ),
        migrations.DeleteModel(
            name='City',
        ),
        migrations.DeleteModel(
            name='Hotel',
        ),
    ]
