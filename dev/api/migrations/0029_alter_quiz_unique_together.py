# Generated by Django 4.0.2 on 2022-08-14 05:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0028_remove_quiz_questions_quizquestion'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='quiz',
            unique_together=set(),
        ),
    ]
