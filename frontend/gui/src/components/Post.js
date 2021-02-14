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

		      <Modal show={show} onHide={handleClose}>
		        <Modal.Body>
			        <Card className="bg-dark text-white">
				  <Card.Img src={`http://res.cloudinary.com/dhchzkdbz/${props.articleData.image}`} alt="Card image" />
				  <Card.ImgOverlay>
				    <Card.Title style={{marginTop:"100px"}}>{props.articleData.caption}</Card.Title>
				    <Card.Text>{props.articleData.author}</Card.Text>
				  </Card.ImgOverlay>
				</Card>
		        </Modal.Body>
		      </Modal>
		    </>
		);
}

export default Post;
