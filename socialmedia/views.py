from rest_framework import generics, views, permissions, mixins, status
from django.http import JsonResponse
from django.contrib.auth.models import User
from .models import Post
from .serializers import PostSerializer
from datetime import datetime
from django.views.generic import TemplateView
from django.contrib.auth import authenticate, login

class IndexView(TemplateView):
    template_name = 'index.html'

class PostListView(mixins.CreateModelMixin, generics.GenericAPIView):
  queryset = Post.objects.all()
  serializer_class = PostSerializer
  permission_classes=[permissions.IsAuthenticated]

  def get(self, request):
    draft_posts = self.get_serializer(
      self.get_queryset().filter(status = 0, owner = request.user.id),
      many = True
    )
    published_posts = self.get_serializer(
      self.get_queryset().filter(status = 1, published_at__lte = datetime.now()),
      many = True
    )
    return JsonResponse({ "draft": draft_posts.data, "posts": published_posts.data })

  def post(self, request, *args, **kwargs):
    request.data['owner'] = request.user.username
    return self.create(request, *args, **kwargs)


class PostDetailView(generics.RetrieveUpdateAPIView):
  queryset = Post.objects.all()
  serializer_class = PostSerializer
  permission_classes=[permissions.IsAuthenticated]


class AuthRegisterView(views.APIView):
  def post(self, request):
    username = request.data['username']
    password = request.data['password']

    user = User(username=username)
    user.set_password(password)
    user.save()

    return JsonResponse({ "success": True })
  

class AuthLoginView(views.APIView):
  def post(self, request):
    username = request.data['username']
    password = request.data['password']

    user = authenticate(username=username, password=password)
    if user is not None:
      login(request, user)
      return JsonResponse({ "success": True })
    else:
      return JsonResponse({ "success": False }, status=status.HTTP_401_UNAUTHORIZED)


class UserView(views.APIView):
  permission_classes=[permissions.IsAuthenticated]

  def get(self, request):
    return JsonResponse({ "username": request.user.username })