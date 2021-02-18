from django.shortcuts import render
from django.views import View
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from rest_auth.registration.views import SocialLoginView
from django.http import HttpResponse, HttpResponseNotFound
import os
# Create your views here.

def index(request):
	return render(request, 'index.html', context=context)

class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter

class Assets(View):

	def get(self, _request, filename):
		path = os.path.join(os.path.dirname(__file__), 'static', filename)

		if os.path.isfile(path):
			with open(path, 'rb') as file:
				return HttpResponse(file.read(), content_type='application/javascript')
		else:
			return HttpResponseNotFound()

