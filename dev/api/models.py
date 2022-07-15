from distutils.command.upload import upload
from django.db import models
from django.contrib.auth.models import User

def Upload_path_handler(instance, filename):
    return "avatars/{id}/{files}".format(id= instance.user.id, file = filename)

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

