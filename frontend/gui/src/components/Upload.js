import React, { useEffect, useState } from "react";
import {Modal, Button} from 'react-bootstrap';

const Upload = (props) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

	return (
		    <>
		      <Modal show={show} onHide={handleClose}>
		        <Modal.Header closeButton>
		          <Modal.Title>Upload a new Photo</Modal.Title>
		        </Modal.Header>
		        <Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
		        <Modal.Footer>
		          <Button variant="secondary" onClick={handleClose}>
		            Close
		          </Button>
		          <Button variant="primary" onClick={handleClose}>
		            Upload
		          </Button>
		        </Modal.Footer>
		      </Modal>
		    </>
		);
}

export default Upload;