# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-06-11 10:32
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0010_auto_20160611_0632'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resume',
            name='data',
            field=models.DateField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='resume',
            name='lastChanges',
            field=models.DateField(auto_now=True),
        ),
    ]
