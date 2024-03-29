import React, { useEffect, useState } from "react";
import {Modal, Button, Card, Col, Row, Container, Image, CardColumns} from 'react-bootstrap';
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
				    <CardColumns>
				      <Card.Img style={{height:"230px", width: "320px"}} src={imageSource} alt="Card image" />
				     </CardColumns>
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
					    	{props.articleData.caption} <br/> <br/> <span style={{fontWeight:"Bold"}}>Category:</span> {props.articleData.category}
					    </Card.Text>
				</Card.Body>
				</Card>
		      </Modal>
		    </>
		);
}

export default Post;
