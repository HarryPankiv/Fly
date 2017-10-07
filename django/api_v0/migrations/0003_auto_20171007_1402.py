# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_v0', '0002_auto_20171007_1400'),
    ]

    operations = [
        migrations.AlterField(
            model_name='flight',
            name='price',
            field=models.IntegerField(default=b'0'),
        ),
        migrations.AlterField(
            model_name='hotel',
            name='price',
            field=models.IntegerField(default=b'0'),
        ),
        migrations.AlterField(
            model_name='hotel',
            name='stars',
            field=models.IntegerField(default=b'0'),
        ),
    ]
