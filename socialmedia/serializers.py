from rest_framework import serializers
from .models import Post
from django.contrib.auth.models import User

class PostSerializer(serializers.ModelSerializer):
  owner = serializers.SlugRelatedField(slug_field='username', queryset=User.objects.all())

  class Meta:
    model = Post
    fields = ['id', 'owner', 'created_at', 'published_at', 'title', 'description', 'status']
