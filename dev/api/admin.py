from email.headerregistry import Group
from django.contrib import admin
from .models import Group, UserProfile,Club
# Register your models here.
@admin.register(Club)
class UserProfileAdmin(admin.ModelAdmin):
    fields = ('name', 'about', 'institute', 'image')
    list_display = ('id', 'name', 'about', 'institute', 'image')

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    fields = (  'user', 'image', 'is_club_member', 'bio')
    list_display = ('id', 'user', 'image','is_club_member','bio')

@admin.register(Group)
class GroupAdmin(admin.ModelAdmin):
    fields = ( 'name', 'location', 'description')
    list_display = ('id', 'name', 'location', 'description')