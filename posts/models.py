from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from cloudinary.models import CloudinaryField
import cloudinary

"""Post model to handle each individual post by the user
	cloudinary field handles the image upload
	Each post is associated with a particular user 
"""
class Post(models.Model):
	image = CloudinaryField('image')
	caption = models.CharField(max_length=300, null=False)
	category = models.CharField(max_length=30, null=False)
	date_posted = models.DateTimeField(default=timezone.now)
	# author = models.ForeignKey(User, on_delete=models.CASCADE)

	def __str__(self):
		return self.caption
