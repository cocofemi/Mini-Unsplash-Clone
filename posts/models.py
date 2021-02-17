from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from cloudinary.models import CloudinaryField
import cloudinary
# from PIL import Image

# model to handle post by the user 
class Post(models.Model):
	# image = models.ImageField(null=True, upload_to='post_pics')
	image = CloudinaryField('image')
	caption = models.CharField(max_length=300, null=False)
	category = models.CharField(max_length=30, null=False)
	# content = models.TextField()
	date_posted = models.DateTimeField(default=timezone.now) #set to the actual time the post was updated
	author = models.ForeignKey(User, on_delete=models.CASCADE)

	def __str__(self):
		return self.caption
