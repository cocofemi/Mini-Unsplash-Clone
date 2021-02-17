"""
WSGI config for mini_unsplash_clone project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application
from whitenoise import DjangoWhiteNoise
from dotenv import load_dotenv

project_folder = os.path.expanduser('C:\Users\HP\Desktop\djreact')
load_dotenv(os.path.join(project_folder, '.env'))

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mini_unsplash_clone.settings')

application = get_wsgi_application()
application = DjangoWhiteNoise(application)
