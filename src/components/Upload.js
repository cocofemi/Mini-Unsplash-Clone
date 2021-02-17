import React, { useEffect, useState } from "react";
import {Modal, Button} from 'react-bootstrap';

import UploadForm from "./UploadForm";

const Upload = (props) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

	return (
		    <>
		       <Button style={{marginRight:"10px"}}variant="primary" onClick={handleShow}>
        			Submit a new photo
      			</Button>
		      <Modal show={show} onHide={handleClose}>
		        <Modal.Header closeButton>
		          <Modal.Title>Upload a new Photo</Modal.Title>
		        </Modal.Header>
		        <Modal.Body>
		        	<UploadForm />
		        </Modal.Body>
		      </Modal>
		    </>
		);
}

export default Upload;