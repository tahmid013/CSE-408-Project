from django.urls import re_path as url 
from django.urls import include
from  rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token
from api import views
from django.urls import path


router = routers.DefaultRouter()
router.register(r'groups', views.GroupViewset)

urlpatterns = [
    url(r'^', include(router.urls)),
    url('authenticate/', views.CustomObtainAuthToken.as_view())
]

