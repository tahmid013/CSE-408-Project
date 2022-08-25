from django.urls import re_path as url 
from django.urls import include
from  rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token
from api import views
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static




router = routers.DefaultRouter()
router.register(r'users', views.UserViewset)
router.register(r'profile', views.UserProfileViewset)
router.register(r'clubs', views.ClubViewset)
router.register(r'questions', views.QuestionViewset)
router.register(r'options', views.OptionsViewset)
router.register(r'category', views.CategoryViewset)
router.register(r'quiztaken', views.QuizTakenViewset)
router.register(r'events', views.EventViewset)
router.register(r'clubuser', views.ClubUserViewset)
router.register(r'quiz', views.QuizViewset)
router.register(r'quiz_question', views.QuizQuestionViewset)
router.register(r'question_category', views.QuestionCategoryViewset)
router.register(r'quiz_category', views.QuizCategoryViewset)
router.register(r'lobby', views.LobbyViewset)
router.register(r'multiplayer', views.MultiplayerInfoViewset)


urlpatterns = [
    url(r'^', include(router.urls)),
    url('authenticate/', views.CustomObtainAuthToken.as_view())
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

