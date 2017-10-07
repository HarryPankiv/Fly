# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Activity',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=100)),
                ('price', models.IntegerField(default=b'0')),
            ],
        ),
        migrations.CreateModel(
            name='City',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('city', models.CharField(max_length=100)),
                ('flight_price', models.IntegerField(default=b'0')),
                ('flight_duration', models.CharField(default=b'0', max_length=150)),
            ],
        ),
        migrations.CreateModel(
            name='Hotel',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=100)),
                ('price', models.IntegerField(default=b'0')),
                ('city', models.ForeignKey(on_delete=django.db.models.deletion.SET_NULL, to='api_v0.City', null=True)),
            ],
        ),
        migrations.AddField(
            model_name='activity',
            name='cities',
            field=models.ManyToManyField(to='api_v0.City'),
        ),
    ]
