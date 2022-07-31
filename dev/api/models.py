from distutils.command.upload import upload
from django.db import models
from django.contrib.auth.models import User

def Upload_path_handler(instance, filename):
    return "avatars/{id}/{file}".format(id= instance.user.id, file = filename)

def Question_image_path_handler(instance, filename):
    return "questions/{id}/{file}".format(id= instance.id, file = filename)

class UserProfile(models.Model):
    user = models.OneToOneField(User , related_name= 'profile', on_delete=models.CASCADE)
    image = models.ImageField(upload_to=Upload_path_handler, blank= True)
    is_club_member = models.BooleanField(default=False)
    bio = models.TextField(max_length=500, blank=True)


class Group(models.Model):
    name = models.CharField(max_length=32, null=False, unique= False)
    location = models.CharField(max_length=32, null=False)
    description = models.CharField(max_length=256, null=False, unique= False)
    class Meta:
        unique_together  =(('name', 'location'))

class Club(models.Model):
    name = models.CharField(max_length=32, null=False, unique= False)
    about = models.CharField(max_length=256, null=False)
    institute = models.CharField(max_length=128, null=False)
    image = models.ImageField(upload_to=Upload_path_handler, blank= True, null=True)
    class Meta:
        unique_together  =(('name', 'institute'))


class Option(models.Model):
    op1 = models.CharField(max_length=32, null=True, blank=True, unique= False)
    op2 = models.CharField(max_length=32, null=True, blank=True, unique= False)
    op3 = models.CharField(max_length=32, null=True, blank=True, unique= False)
    op4 = models.CharField(max_length=32, null=True, blank=True, unique= False)
    correct_option = models.CharField(max_length=32, null=True, blank=True, unique= False)

    class Meta:
        unique_together  =(('op1', 'op2', 'op3', 'op4', 'correct_option'))


class Question(models.Model):
    type = models.CharField(max_length=32, null=False, unique= False)
    question = models.CharField(max_length=256, null=False)
    option = models.ForeignKey(Option, on_delete=models.CASCADE)
    image = models.ImageField(upload_to=Question_image_path_handler, blank= True, null=True)
    answer = models.CharField(max_length=32, null=False)
    point = models.IntegerField(null=False)

    class Meta:
        unique_together  =(('question', 'option'))
    


