from email.headerregistry import Group
from django.contrib import admin
from .models import Group, Options, Question, UserProfile,Club
# Register your models here.
@admin.register(Club)
class ClubAdmin(admin.ModelAdmin):
    fields = ('id','name', 'about', 'institute')
    list_display = ('id', 'name', 'about', 'institute')

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    fields = ('id', 'ques_type', 'category','question', 'answer',  'point')
    list_display = ('id', 'ques_type', 'category','question', 'answer',  'point')
    
@admin.register(Options)
class OptionAdmin(admin.ModelAdmin):
    fields = ('id', 'op_1', 'op_2', 'op_3', 'op_4', 'correct_op')        
    list_display = ('id', 'op_1', 'op_2', 'op_3', 'op_4', 'correct_op')        

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    fields = (  'user', 'image', 'is_club_member', 'bio')
    list_display = ('id', 'user', 'image','is_club_member','bio')

@admin.register(Group)
class GroupAdmin(admin.ModelAdmin):
    fields = ( 'name', 'location', 'description')
    list_display = ('id', 'name', 'location', 'description')