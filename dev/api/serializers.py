from dataclasses import field

from .models import *
from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.authtoken.models import Token

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('id', 'image', 'is_club_admin', 'bio')

class UserSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer()
    class Meta:
        model = User 
        fields = ('id', 'username','first_name','last_name' ,'email','password','profile')
        extra_kwargs = {'password': {'write_only': True, 'required': False},'username': {'required': False} }

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
        fields = ('id', 'ques_type','question', 'options','answer','image','point')

class OptionsSerializer(serializers.ModelSerializer   ):
    class Meta:
        model = Options
        fields = ('id', 'op_1', 'op_2', 'op_3', 'op_4')        
class CategorySerializer(serializers.ModelSerializer   ):
    class Meta:
        model = Category
        fields = ('id', 'name', 'about', 'image', 'quote')     

class QuizTakenSerializer(serializers.ModelSerializer   ):
    class Meta:
        model = QuizTaken
        fields = ('id', 'user', 'quiz', 'score','started_at','finished_at')

class EventSerializer(serializers.ModelSerializer   ):
    class Meta:
        model = Event
        fields = ('id', 'name', 'about', 'image', 'club', 'quiz', 'created_by', 'created_at')
class ClubUserSerializer(serializers.ModelSerializer   ):
    class Meta:
        model = ClubUser
        fields = ('id', 'club_id', 'user_id','is_admin','designation')
class QuizSerializer(serializers.ModelSerializer   ):
    class Meta:
        model = Quiz
        fields = ('id', 'name', 'about','club', 'created_by','created_at','updated_at')
class QuizQuestionSerializer(serializers.ModelSerializer   ):
    class Meta:
        model = QuizQuestion
        fields = ('id', 'quiz_id', 'question_id')

class QuestionCategorySerializer(serializers.ModelSerializer   ):
    class Meta:
        model = QuestionCategory
        fields = ('id', 'question_id', 'category_id')

class QuizCategorySerializer(serializers.ModelSerializer   ):
    class Meta:
        model = QuizCategory
        fields = ('id', 'quiz_id', 'category_id')
class MultiplayerInfoSerializer(serializers.ModelSerializer   ):
    class Meta:
        model = MultiplayerInfo
        fields = ('id', 'name_1','name_2','player_1','player_2', 'cur_pt_1', 'cur_pt_2')
class LobbySerializer(serializers.ModelSerializer   ):
    class Meta:
        model = Lobby
        fields = ('id', 'user_id', 'name', 'created_at', 'updated_at')

                