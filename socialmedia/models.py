from django.db import models

POST_STATUS = {0: "DRAFT", 1: "PUBLISHED"}

class Post(models.Model):
  created_at = models.DateTimeField(auto_now_add = True)
  published_at = models.DateTimeField(blank = True, null = True)
  owner = models.ForeignKey("auth.User", on_delete = models.CASCADE)
  title = models.CharField(max_length = 50)
  description = models.CharField(max_length = 200)
  status = models.IntegerField(choices = POST_STATUS, default = 0)