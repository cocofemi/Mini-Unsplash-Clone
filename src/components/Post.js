import React, { useEffect, useState } from "react";
import {Modal, Button, Card, Col, Row, Container, Image, CardDeck} from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

const Post = (props) => {

	const imageSource =`http://res.cloudinary.com/dhchzkdbz/${props.articleData.image}`
	const [show, setShow] = useState(false);
  	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);

  	const chunk = (arr, chunkSize = 1, cache = []) => {
  	const tmp = [...arr]
  	if (chunkSize <= 0) return cache
  	while (tmp.length) cache.push(tmp.splice(0, chunkSize))
  	return cache

	}

	return (
		    <>
		      <Container className="post-container">
				  <Row>
				    <Col onClick={handleShow}>
				    <CardDeck>
				      <Card.Img src={imageSource} alt="Card image" />
				     </CardDeck>
				    </Col>
				  </Row>
				</Container>

		      <Modal 
		      	show={show} 
		      	onHide={handleClose}
		      	centered>
			      <Card className="bg-dark text-white">
				  <Card.Img src={imageSource} alt="Card image" />
				  <Card.Body style={{backgroundColor:'white'}}>
					  <Card.Text style={{color: "black"}}>
					    	{props.articleData.caption} <br/> <br/> <p style={{fontWeight:"Bold"}}>Category:</p> {props.articleData.category}
					    </Card.Text>
				</Card.Body>
				</Card>
		      </Modal>
		    </>
		);
}

export default Post;
