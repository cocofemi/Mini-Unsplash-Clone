          // <Container>
          //   <Row className="justify-content-md-center">
          //       <Jumbotron>
          //         <Container>
          //           <h1>Fluid jumbotron</h1>
          //           <p>
          //             This is a modified jumbotron that occupies the entire horizontal space of
          //             its parent.
          //           </p>
          //         </Container>
          //       </Jumbotron>
          //   </Row>
          // </Container>


          //        return (
//        <div>
//             {
//                  props.articles.map((article, index) => 
//                  <CardColumns style={{marginTop:"10px"}}>
//                    <Card>
//                      <Card.Body>
//                            <Post 
//                                 key={index} 
//                                 articleData={article}
//                            />
//                       </Card.Body>
//                     </Card>
//                  </CardColumns>
//                  )
//             }
          
//        </div>
//        );
// }

const Product = (props) => {
     const card = (<Card>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            Quantity : {props.quantity}
          </Card.Text>
          <Card.Title>{props.price}</Card.Title>
            <Button variant="primary">View Product</Button>
        </Card.Body>
      </Card>)
  return card;
}

<Skeleton height={200} width={320} />


<GoogleLogin 
              clientId="203425879861-duk66q8klnol7iojm19ppqks85v3hud5.apps.googleusercontent.com"
              buttonText="LOGIN WITH GOOGLE"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              isSignedIn={true}
              uxMode="redirect"
              redirectUri="http://localhost:3000/home/"
            />


                # return Response({
    #   'status':'success',
    #   'data': upload_data,
    #   }, status=201) 

  # def perform_create(self, serializer):
  #   serializer.save(author=self.request.user)

  # def create(self, request, *args, **kwargs):
  #   serializer = self.get_serializer(data=request.data)
  #   serializer.is_valid(raise_exception=True)
  #   upload_data = cloudinary.uploader.upload(request.FILES['image'])
  #   self.perform_create(upload_data)
  #   headers = self.get_success_headers(serializer.data)
  #   return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

  # def create(self, request, *args, **kwargs):
  #   # post = Post(author=self.request.user)
  #   serializer = self.serializer_class(post, data=request.data)
  #   if serializer.is_valid():
  #     self.upload_image_cloudinary(request, request.FILES['image'])
  #     serializer.save()
  #     return Response(serializer.data, status=status.HTTP_201_CREATED)
  #   else:
  #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)