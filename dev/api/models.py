from distutils.command.upload import upload
from django.db import models
from django.contrib.auth.models import User

def Upload_path_handler(instance, filename):
    return "avatars/{id}/{file}".format(id= instance.user.id, file = filename)

def Question_image_path_handler(instance, filename):
    return "questions/{id}/{file}".format(id= instance.id, file = filename)

def Category_image_path_handler(instance, filename):
    return "categories/{id}/{file}".format(id= instance.id, file = filename)

def Event_image_path_handler(instance, filename):
    return "events/{id}/{file}".format(id= instance.id, file = filename)


class Club(models.Model):
    name = models.CharField(max_length=32, null=False, unique= False)
    about = models.CharField(max_length=256, null=False)
    institute = models.CharField(max_length=128, null=False)
    #members = models.ManyToManyField(User, related_name='members',null=True)
    
    def __str__(self):
        return self.name

    class Meta:
        unique_together  =(('name', 'institute'))

class UserProfile(models.Model):
    user = models.OneToOneField(User , related_name= 'profile', on_delete=models.CASCADE)
    image = models.ImageField(upload_to=Upload_path_handler, blank= True)
    #club = models.ForeignKey(Club, related_name= 'club', on_delete=models.CASCADE, null=True, blank=True)
    
    is_club_admin = models.BooleanField(default=False)
    bio = models.TextField(max_length=500, blank=True)

    def __str__(self):
        return self.user.username



class Options(models.Model):
    op_1 = models.CharField(max_length=32, null=False)
    op_2 = models.CharField(max_length=32, null=False)
    op_3 = models.CharField(max_length=32, null=False)
    op_4 = models.CharField(max_length=32, null=False)

class Category(models.Model):
    name = models.CharField(max_length=32, null=False)
    about = models.CharField(max_length=256, null=True)
    image = models.ImageField(upload_to=Category_image_path_handler, blank= True,null=True)
    quote = models.CharField(max_length=256, null=True)

    def __str__(self):
        return self.name
    class Meta:
        unique_together  =(('name','about'))



class Question(models.Model):
    ques_type = models.CharField(max_length=32, null=False, unique= False)
    #category = models.CharField(max_length=32, null=False, unique= False,default='GK')

    question = models.CharField(max_length=256, null=False, unique= False)
    options = models.ForeignKey(Options, on_delete=models.CASCADE,null=True)
    answer = models.CharField(max_length=128, null=False)
    
    image = models.ImageField(upload_to=Question_image_path_handler, blank= True, null=True)
    point = models.IntegerField(null=False)

    class Meta:
        unique_together  =(('ques_type','question', 'options' , 'answer'))


class Quiz(models.Model):
    name = models.CharField(max_length=32, null=False, unique= False)
    about = models.CharField(max_length=256, null=False, unique= False)
    #questions = models.ManyToManyField(Question, related_name='quiz')
    club = models.ForeignKey(Club, on_delete=models.CASCADE,null=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE,null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    

# here duration needed for quiz need to be considered
class QuizTaken(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    score = models.IntegerField(null=False)
    started_at = models.DateTimeField(auto_now_add=True)
    finished_at = models.DateTimeField(auto_now=True)
    

    class Meta:
        unique_together  =(('quiz', 'user'))

class Event(models.Model):
    name = models.CharField(max_length=32, null=False, unique= False)
    about = models.CharField(max_length=256, null=False)
    image = models.ImageField(upload_to=Event_image_path_handler, blank= True, null=True)
    club = models.ForeignKey(Club, on_delete=models.CASCADE,null=False)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE,null=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE,null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        unique_together  =(('name', 'created_by'))

    
class ClubUser(models.Model):
    club_id = models.ForeignKey(Club, on_delete=models.CASCADE,null=False, blank=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE,null=False, blank=True)
    is_admin = models.BooleanField(default=False)
    designation = models.CharField(max_length=32, null=False, unique= False,default='Member')
    
    class Meta:
        unique_together  =(('club_id', 'user_id'))

class QuizQuestion(models.Model):
    quiz_id = models.ForeignKey(Quiz, on_delete=models.CASCADE,null=False, blank=True)
    question_id = models.ForeignKey(Question, on_delete=models.CASCADE,null=False, blank=True)
    class Meta:
        unique_together  =(('quiz_id', 'question_id'))


class QuestionCategory(models.Model):
    question_id = models.ForeignKey(Question, on_delete=models.CASCADE,null=False, blank=True)
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE,null=False, blank=True)
    class Meta:
        unique_together  =(('question_id', 'category_id'))

class QuizCategory(models.Model):
    quiz_id = models.ForeignKey(Quiz, on_delete=models.CASCADE,null=False, blank=True)
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE,null=False, blank=True)
    class Meta:
        unique_together  =(('quiz_id', 'category_id'))
class MultiplayerInfo(models.Model):
    player_1 =  models.IntegerField(null=False, default=0)
    player_2 =  models.IntegerField(null=False, default=0)
    cur_pt_1 = models.IntegerField(null=False, default=0)
    cur_pt_2 = models.IntegerField(null=False, default=0)
    name_1 = models.CharField(max_length=32, null=False, unique= False,default='Player 1')
    name_2 = models.CharField(max_length=32, null=False, unique= False,default='Player 2')

class Lobby(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE,null=False, blank=True)
    name = models.CharField(max_length=32, null=False,default='Default')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        unique_together  =(('user_id', 'name'))
    