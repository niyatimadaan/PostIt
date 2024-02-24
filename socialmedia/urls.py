"""
URL configuration for socialmedia project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from rest_framework.authtoken import views
from .views import AuthRegisterView, AuthLoginView, PostListView, PostDetailView, IndexView, UserView

urlpatterns = [
    path('', IndexView.as_view()),
    path('admin/', admin.site.urls),
    path('api/register/', AuthRegisterView.as_view()),
    path('api/login/', AuthLoginView.as_view()),
    path('api/user/', UserView.as_view()),
    path('api/posts/', PostListView.as_view()),
    path('api/posts/<int:pk>/', PostDetailView.as_view())
]
