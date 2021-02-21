import React from 'react';
import axios from 'axios';
import {Form, Button} from 'react-bootstrap';
import UploadPreview from './UploadPreview';
import {withRouter} from 'react-router';

class UploadForm extends React.Component {

	handleSubmitForm = (e, requestType) => {
		
		const image = e.target.elements.image.value;
		const caption = e.target.elements.caption.value;
		const category = e.target.elements.category.value;

		axios.post('http://127.0.0.1:8000/api/create/',{
			image : image,
			caption : caption,
			category : category
		})
		.then(res => console.log(res))
		console.log(image, caption, category)
	}
	render () {
		return(
		<div>
  			<Form onSubmit={this.handleSubmitForm}>
  				<UploadPreview />
				  <Form.Group controlId="exampleForm.ControlTextarea1" style={{marginTop:"15px"}}>
					  <Form.Label style={{fontWeight:"Bold"}}>Add a Caption</Form.Label>
					  <Form.Control name = "caption" as="textarea" rows={3} placeholder="Add a befitting caption to your photo"/>
					</Form.Group>
				  <Form.Group controlId="exampleForm.ControlInput1">
					 <Form.Label style={{fontWeight:"Bold"}}>Category</Form.Label>
					 <Form.Control name="category" type="text" placeholder="i.e Nature, Lifstyle, City, Sports, Adventure e.t.c" />
				   </Form.Group>
				   <Button variant="primary" type="submit">
					 Upload
					</Button>
					<Button style={{ marginLeft: "10px" }}variant="danger" onClick={this.props.handleClose}>
					 	Close
					</Button>
			</Form>
		</div>
		);
	}
};

export default withRouter(UploadForm);