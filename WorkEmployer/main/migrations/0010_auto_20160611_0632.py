# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-06-11 06:32
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0009_company'),
    ]

    operations = [
        migrations.AddField(
            model_name='resume',
            name='city',
            field=models.CharField(default='', max_length=1000),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='resume',
            name='data',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2016, 6, 11, 6, 31, 54, 585027, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='resume',
            name='lastChanges',
            field=models.DateTimeField(auto_now=True, default=datetime.datetime(2016, 6, 11, 6, 32, 6, 729934, tzinfo=utc)),
            preserve_default=False,
        ),
    ]
