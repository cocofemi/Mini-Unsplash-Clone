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