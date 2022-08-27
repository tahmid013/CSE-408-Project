import re
from tokenize import Token
from urllib import response
from django.shortcuts import render
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework import viewsets,filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import *
from .serializers import *

# Create your views here.


class UserProfileViewset(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = (filters.SearchFilter,DjangoFilterBackend)
    search_fields = ['username']
    filterset_fields = ['username']  

class ClubViewset(viewsets.ModelViewSet):
    queryset  = Club.objects.all()
    serializer_class = ClubSerializer
    filter_backends = (filters.SearchFilter,DjangoFilterBackend)
    search_fields = ['name', 'about', 'institute']
    


class QuestionViewset(viewsets.ModelViewSet):
    queryset  = Question.objects.all()
    serializer_class = QuestionSerializer
    

class OptionsViewset(viewsets.ModelViewSet):
    queryset  = Options.objects.all()
    serializer_class = OptionsSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ['op_1', 'op_2','op_3','op_4']

class CategoryViewset(viewsets.ModelViewSet):
    queryset  = Category.objects.all()
    serializer_class = CategorySerializer
    filter_backends = [DjangoFilterBackend]
    search_fields = ['name']
    filterset_fields = ['name']  

class QuizTakenViewset(viewsets.ModelViewSet):
    queryset  = QuizTaken.objects.all()
    serializer_class = QuizTakenSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ['user', 'quiz', 'score','started_at','finished_at']

class EventViewset(viewsets.ModelViewSet):
    queryset  = Event.objects.all()
    serializer_class = EventSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ['name', 'about', 'image', 'club', 'quiz', 'created_by', 'created_at']
    

class CustomObtainAuthToken(ObtainAuthToken): 
    def post(self, request, *args, **kwargs):
        response = super(CustomObtainAuthToken, self).post(request, *args, **kwargs)
        token  = Token.objects.get(key = response.data['token'])
        user = User.objects.get(id = token.user_id)
        userSerializer = UserSerializer(user, many = False)
        return Response({'token':token.key, 'user': userSerializer.data }) 
class ClubUserViewset(viewsets.ModelViewSet):
    queryset  = ClubUser.objects.all()
    serializer_class = ClubUserSerializer
    filter_backends = [DjangoFilterBackend]
    search_fields = ['club_id', 'user_id']
    filterset_fields = ['club_id', 'user_id']

class QuizViewset(viewsets.ModelViewSet):
    queryset  = Quiz.objects.all()
    serializer_class = QuizSerializer
    filter_backends = [DjangoFilterBackend]
    search_fields = ['name', 'about']
    filterset_fields = ['club', 'created_by']    
    
class QuizQuestionViewset(viewsets.ModelViewSet):
    queryset  = QuizQuestion.objects.all()
    serializer_class = QuizQuestionSerializer
    filter_backends = [DjangoFilterBackend]
    search_fields = ['quiz_id', 'question_id']
    filterset_fields = ['quiz_id', 'question_id']    

class QuestionCategoryViewset(viewsets.ModelViewSet):
    queryset  = QuestionCategory.objects.all()
    serializer_class = QuestionCategorySerializer
    filter_backends = [DjangoFilterBackend]
    search_fields = ['question_id', 'category_id']
    filterset_fields = ['question_id', 'category_id']

class QuizCategoryViewset(viewsets.ModelViewSet):
    queryset  = QuizCategory.objects.all()
    serializer_class = QuizCategorySerializer
    filter_backends = [DjangoFilterBackend]
    search_fields = ['quiz_id', 'category_id']
    filterset_fields = ['quiz_id', 'category_id']

class MultiplayerInfoViewset(viewsets.ModelViewSet):
    queryset  = MultiplayerInfo.objects.all()
    serializer_class = MultiplayerInfoSerializer
    filter_backends = [DjangoFilterBackend]
    search_fields = ['name_1','name_2']
    filterset_fields = ['name_1','name_2','player_1','player_2']
class LobbyViewset(viewsets.ModelViewSet):
    queryset  = Lobby.objects.all()
    serializer_class = LobbySerializer
    filter_backends = [DjangoFilterBackend]
    search_fields = ['user_id', 'name' ]
    filterset_fields = ['user_id', 'name']
