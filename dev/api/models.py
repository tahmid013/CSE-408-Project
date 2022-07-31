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
    
    class Meta:
        unique_together  =(('name', 'institute'))


class Options(models.Model):
    op_1 = models.CharField(max_length=32, null=False)
    op_2 = models.CharField(max_length=32, null=False)
    op_3 = models.CharField(max_length=32, null=False)
    op_4 = models.CharField(max_length=32, null=False)
    correct_op = models.CharField(max_length=32, null=False)

    class Meta:
        unique_together  =(('op_1', 'op_2', 'op_3', 'op_4', 'correct_op'))

class Question(models.Model):
    ques_type = models.CharField(max_length=32, null=False, unique= False)
    category = models.CharField(max_length=32, null=False, unique= False,default='GK')

    question = models.CharField(max_length=256, null=False, unique= False)
    #options = models.ForeignKey(Options, on_delete=models.CASCADE)
    answer = models.CharField(max_length=128, null=False)
    
    #image = models.ImageField(upload_to=Question_image_path_handler, blank= True, null=True)
    #question_time = models.CharField(max_length=128, null=False)
    point = models.IntegerField(null=False)

    class Meta:
        unique_together  =(('ques_type', 'answer', 'point'))




