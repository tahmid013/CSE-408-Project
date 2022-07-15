from dataclasses import field
from .models import Group,UserProfile
from django.contrib.auth.models import User
from rest_framework import serializers

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ( 'image', )

class UserSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer()
    class Meta:
        model = User 
        fields = ('id', 'username' , 'profile')


class GroupSerializer(serializers.ModelSerializer   ):
    class Meta:
        model = Group
        fields = ('id', 'name', 'location', 'description')