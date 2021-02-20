from rest_framework import serializers
from django.contrib.auth.models import User
from posts.models import Post

# serializers for post model objects 
class PostSerializer(serializers.ModelSerializer):
	# author = serializers.ReadOnlyField(source='author.username')

	class Meta:
		model = Post
		fields = ('image','category', 'caption', 'date_posted')