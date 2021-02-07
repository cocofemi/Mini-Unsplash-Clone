from rest_framework.generics import ListAPIView, RetrieveAPIView
from posts.models import Post 
from .serializers import PostSerializer

# RESTAPI query to return all post from a user
class PostListView(ListAPIView):
	queryset = Post.objects.all()
	serializer_class = PostSerializer

# RESTAPI query return a single object from APICall
class PostDetailView(RetrieveAPIView):
	queryset = Post.objects.all()
	serializer_class = PostSerializer	