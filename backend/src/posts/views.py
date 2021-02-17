from django.shortcuts import render
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from rest_auth.registration.views import SocialLoginView

# Create your views here.

def index(request):
	return render(request, 'index.html', context=context)

class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
