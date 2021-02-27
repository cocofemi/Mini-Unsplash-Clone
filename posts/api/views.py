from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView
from rest_framework.views import APIView
from posts.models import Post 
from .serializers import PostSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, JSONParser
import cloudinary.uploader 

# RESTAPI query to return all post from a user
class PostListView(ListAPIView):
	queryset = Post.objects.all().order_by('-date_posted')
	serializer_class = PostSerializer

# RESTAPI query return a single object from APICall
class PostDetailView(RetrieveAPIView):
	queryset = Post.objects.all()
	serializer_class = PostSerializer	

class PostCreateView(CreateAPIView):
	queryset = Post.objects.all()
	serializer_class = PostSerializer

	parser_classes = (
		MultiPartParser,
		JSONParser, 
		)

	@staticmethod
	def post(request):
		serializer = PostSerializer(data=request.data)
		if serializer.is_valid():
			upload_data = cloudinary.uploader.upload(request.data.get('image'))
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		else:
			return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
