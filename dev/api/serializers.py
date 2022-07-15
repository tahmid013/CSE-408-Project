from dataclasses import field
from .models import Group,UserProfile
from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.authtoken.models import Token

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ( 'image', 'is_club_member', 'bio')

class UserSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer()
    class Meta:
        model = User 
        fields = ('id', 'username' ,'email','password','profile')
        extra_kwargs = {'password': {'write_only': True, 'required': False}}

    def create(self, validated_data):
        profile_data = validated_data.pop('profile')
        user = User.objects.create(**validated_data)
        UserProfile.objects.create(user=user, **profile_data)
        Token.objects.create(user=user)
        return user

class GroupSerializer(serializers.ModelSerializer   ):
    class Meta:
        model = Group
        fields = ('id', 'name', 'location', 'description')