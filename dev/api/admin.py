from email.headerregistry import Group
from django.contrib import admin
from .models import Group, UserProfile
# Register your models here.

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    fields = (  'user', 'image')
    list_display = ('id', 'user', 'image')

@admin.register(Group)
class GroupAdmin(admin.ModelAdmin):
    fields = ( 'name', 'location', 'description')
    list_display = ('id', 'name', 'location', 'description')