from dataclasses import field

from .models import *
from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.authtoken.models import Token

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('id', 'image','club', 'is_club_admin', 'bio')

class UserSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer()
    class Meta:
        model = User 
        fields = ('id', 'username' ,'email','password','profile')
        extra_kwargs = {'password': {'write_only': True, 'required': False}}

    def create(self, validated_data):
        profile_data = validated_data.pop('profile')
        user = User(
            email = validated_data.get('email'),
            username = validated_data.get('username')
        )
        user.set_password(validated_data.get('password'))
        user.save()
        UserProfile.objects.create(user=user, **profile_data)
        Token.objects.create(user=user)
        return user

class ClubSerializer(serializers.ModelSerializer   ):
    class Meta:
        model = Club
        fields = ('id', 'name', 'about', 'institute')


class QuestionSerializer(serializers.ModelSerializer   ):
    class Meta:
        model = Question
        fields = ('id', 'ques_type', 'category','question', 'options','answer','image','point')

class OptionsSerializer(serializers.ModelSerializer   ):
    class Meta:
        model = Options
        fields = ('id', 'op_1', 'op_2', 'op_3', 'op_4')        
class CategorySerializer(serializers.ModelSerializer   ):
    class Meta:
        model = Category
        fields = ('id', 'name', 'about', 'image', 'quote')     