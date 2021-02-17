import React, { useEffect, useState } from "react";
import {Modal, Button, Card, Col, Row, Container, Image} from 'react-bootstrap';

const Post = (props) => {

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
		      <Container>
				  <Row>
				    <Col onClick={handleShow}>
				      <Card.Img src={`http://res.cloudinary.com/dhchzkdbz/${props.articleData.image}`} alt="Card image" />
				    </Col>
				  </Row>
				</Container>

		      <Modal 
		      	show={show} 
		      	onHide={handleClose}
		      	centered>
			      <Card className="bg-dark text-white">
				  <Card.Img src={`http://res.cloudinary.com/dhchzkdbz/${props.articleData.image}`} alt="Card image" />
				  <Modal.Footer>
		        	<Card.Text
				    style={{color: "white"}}>
				    {props.articleData.caption} <br/> <br/> <p style={{fontWeight:"Bold"}}>Category:</p> {props.articleData.category}</Card.Text>
		      </Modal.Footer>
				</Card>
		      </Modal>
		    </>
		);
}

export default Post;
