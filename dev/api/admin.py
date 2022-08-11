from email.headerregistry import Group
from django.contrib import admin
from .models import  *
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
    fields = ('id', 'op_1', 'op_2', 'op_3', 'op_4')       
    list_display = ('id', 'op_1', 'op_2', 'op_3', 'op_4')        

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    fields = (  'user', 'image','club', 'is_club_admin', 'bio')
    list_display = ('id', 'user', 'image', 'club', 'is_club_admin','bio')

@admin.register(Quiz)
class QuizAdmin(admin.ModelAdmin):
    fields = ('id','name','about','questions','club','created_by','created_at','updated_at')
    list_display = ('id','name','about','club','created_by','created_at','updated_at')

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    fields = ('name','about','image','quote')
    list_display = ('id','name','about','image','quote')

