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
		      {props.results}
				  <Row>
				    <Col onClick={handleShow}>
				      <Card.Img src={`http://res.cloudinary.com/dhchzkdbz/${props.articleData.image}`} alt="Card image" />
				      <Card.ImgOverlay style={{marginTop:"100px"}}>
					    <Card.Text 
					    	style={{fontSize:"larger", fontWeight: "Bold", color: "white"}}>
					    	{props.articleData.author} <br /> {props.articleData.caption} </Card.Text>
					  </Card.ImgOverlay>
				    </Col>
				  </Row>
				</Container>

		      <Modal 
		      	show={show} 
		      	onHide={handleClose}
		      	centered>
			        <Card className="bg-dark text-white">
				  <Card.Img src={`http://res.cloudinary.com/dhchzkdbz/${props.articleData.image}`} alt="Card image" />
				  <Card.ImgOverlay style={{marginTop:"200px"}}>
				    <Card.Text
				    style={{fontSize:"larger", fontWeight: "Bold", color: "white"}}>
				    {props.articleData.author} <br/> {props.articleData.caption}</Card.Text>
				  </Card.ImgOverlay>
				</Card>
		      </Modal>
		    </>
		);
}

export default Post;
