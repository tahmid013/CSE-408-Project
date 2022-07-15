import re
from tokenize import Token
from urllib import response
from django.shortcuts import render
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework import viewsets
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import Group, UserProfile
from .serializers import GroupSerializer, UserSerializer,UserProfileSerializer 

# Create your views here.
class UserProfileViewset(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class GroupViewset(viewsets.ModelViewSet):
    queryset  = Group.objects.all()
    serializer_class = GroupSerializer

class CustomObtainAuthToken(ObtainAuthToken): 
    def post(self, request, *args, **kwargs):
        response = super(CustomObtainAuthToken, self).post(request, *args, **kwargs)
        token  = Token.objects.get(key = response.data['token'])
        user = User.objects.get(id = token.user_id)
        userSerializer = UserSerializer(user, many = False)
        return Response({'token':token.key, 'user': userSerializer.data }) 
