# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_v0', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Hotel',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('city', models.CharField(max_length=100)),
                ('stars', models.IntegerField(default=b'0', max_length=1)),
                ('price', models.IntegerField(default=b'0', max_length=100)),
            ],
        ),
        migrations.AddField(
            model_name='flight',
            name='duration',
            field=models.CharField(default=b'0', max_length=150),
        ),
        migrations.AlterField(
            model_name='flight',
            name='price',
            field=models.IntegerField(default=b'0', max_length=4),
        ),
    ]
