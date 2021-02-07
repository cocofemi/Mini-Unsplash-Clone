from rest_framework import serializers
from posts.models import Post

# serializers for post model objects 
class PostSerializer(serializers.ModelSerializer):
	class Meta:
		model = Post
		fields = ('image','title', 'date_posted','author')