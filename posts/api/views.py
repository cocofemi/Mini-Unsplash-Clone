from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView
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

	# parser_classes = (
	# 	MultiPartParser,
	# 	JSONParser, 
	# 	)

	# @staticmethod
	# def post():
	# 	file = request.data.get('image')
	# 	upload_data = cloudinary.uploader.upload(file)
	# 	return response({
	# 		'status':'success',
	# 		'data': upload_data,
	# 		}, status=201) 

	# def perform_create(self, serializer):
	# 	serializer.save(author=self.request.user)

	# def create(self, request, *args, **kwargs):
	# 	request.data.update({'author': request.user})
	# 	return super(PostCreateView, self).create(request, *args, **kwargs)

	def create(self, request, *args, **kwargs):
		# post = Post(author=self.request.user)
		serializer = self.serializer_class(post, data=request.data)
		if serializer.is_valid():
			self.upload_image_cloudinary(request, request.FILES['image'])
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		else:
			return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)