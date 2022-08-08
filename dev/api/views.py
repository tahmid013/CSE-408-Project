import re
from tokenize import Token
from urllib import response
from django.shortcuts import render
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework import viewsets,filters
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

class GroupViewset(viewsets.ModelViewSet):
    queryset  = Group.objects.all()
    serializer_class = GroupSerializer
class ClubViewset(viewsets.ModelViewSet):
    queryset  = Club.objects.all()
    serializer_class = ClubSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ['name', 'about', 'institute']


class QuestionViewset(viewsets.ModelViewSet):
    queryset  = Question.objects.all()
    serializer_class = QuestionSerializer

class OptionsViewset(viewsets.ModelViewSet):
    queryset  = Options.objects.all()
    serializer_class = OptionsSerializer
     

class CustomObtainAuthToken(ObtainAuthToken): 
    def post(self, request, *args, **kwargs):
        response = super(CustomObtainAuthToken, self).post(request, *args, **kwargs)
        token  = Token.objects.get(key = response.data['token'])
        user = User.objects.get(id = token.user_id)
        userSerializer = UserSerializer(user, many = False)
        return Response({'token':token.key, 'user': userSerializer.data }) 
