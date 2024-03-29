"""mini_unsplash_clone URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
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
from django.urls import path, include, re_path
from posts.views import GoogleLogin
from django.views.generic import TemplateView


"""Rest Auth and google rest auth urls are defined and called 
    Also template views url for react router is defined to help with page navigation
"""
urlpatterns = [
    path('admin/', admin.site.urls),
    path('/', include('posts.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('api/', include('posts.api.urls')),
    path('rest-auth/google/', GoogleLogin.as_view(), name='google_login'),
    re_path(r'.*', TemplateView.as_view(template_name='index.html')),
    re_path('home/', TemplateView.as_view(template_name='index.html', content_type="application/javascript")),
]
