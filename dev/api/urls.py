from django.urls import re_path as url 
from django.urls import include
from  rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token
from api import views
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'groups', views.GroupViewset)
router.register(r'users', views.UserViewset)
router.register(r'profile', views.UserProfileViewset)
router.register(r'clubs', views.ClubViewset)


urlpatterns = [
    url(r'^', include(router.urls)),
    url('authenticate/', views.CustomObtainAuthToken.as_view())
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

