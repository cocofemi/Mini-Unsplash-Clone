# Generated by Django 3.1.6 on 2021-02-16 22:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0006_auto_20210216_1813'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='caption',
            field=models.CharField(max_length=300),
        ),
    ]
