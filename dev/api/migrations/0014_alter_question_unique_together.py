# Generated by Django 4.0.2 on 2022-07-31 09:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_remove_club_image_remove_question_image'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='question',
            unique_together={('ques_type', 'category', 'answer', 'point')},
        ),
    ]
