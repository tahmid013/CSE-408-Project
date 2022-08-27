from email.headerregistry import Group
from django.contrib import admin
from .models import  *
# Register your models here.

@admin.register(Club)
class ClubAdmin(admin.ModelAdmin):
    fields = ('name', 'about', 'institute')
    list_display = ('id', 'name', 'about', 'institute')

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    fields = ('ques_type', 'question', 'answer',  'point')
    list_display = ('id', 'ques_type','question', 'answer',  'point')
    
@admin.register(Options)
class OptionAdmin(admin.ModelAdmin):
    fields = ('op_1', 'op_2', 'op_3', 'op_4')       
    list_display = ('id', 'op_1', 'op_2', 'op_3', 'op_4')        

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    fields = (  'user', 'image', 'is_club_admin', 'bio')
    list_display = ('id', 'user', 'image', 'is_club_admin','bio')

   

@admin.register(Quiz)
class QuizAdmin(admin.ModelAdmin):
    fields = ('name','about','club','created_by','created_at','updated_at')
    list_display = ('id','name','about','club','created_by','created_at','updated_at')

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    fields = ('name','about','image','quote')
    list_display = ('id','name','about','image','quote')

@admin.register(QuizTaken)
class QuizTakenAdmin(admin.ModelAdmin):
    fields = ('user','quiz','score','started_at','finished_at')
    list_display = ('id','user','quiz','score','started_at','finished_at')

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    fields = ('name','about','image','club','quiz','created_by','created_at')
    list_display = ('id','name','about','image','club','quiz','created_by','created_at')

@admin.register(QuizQuestion)
class QuizQuestionAdmin(admin.ModelAdmin):
    fields = ('quiz_id','question_id')
    list_display = ('id','quiz_id','question_id')

@admin.register(QuestionCategory)
class QuestionCategoryAdmin(admin.ModelAdmin):
    fields = ('question_id','category_id')
    list_display = ('id','question_id','category_id')

@admin.register(QuizCategory)
class QuizCategoryAdmin(admin.ModelAdmin):
    fields = ('quiz_id','category_id')
    list_display = ('id','quiz_id','category_id')

@admin.register(MultiplayerInfo)
class MultiplayerInfoAdmin(admin.ModelAdmin):
    fields = ('player_1','player_2','cur_pt_1','cur_pt_2','name_1','name_2')
    list_display = ('id','player_1','player_2','cur_pt_1','cur_pt_2','name_1','name_2')
@admin.register(Lobby)
class LobbyAdmin(admin.ModelAdmin):
    fields = ('user_id', 'name', 'created_at', 'updated_at')
    list_display = ('id', 'user_id', 'name', 'created_at', 'updated_at')