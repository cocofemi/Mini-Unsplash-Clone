import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

const Search = (props) => {
	return (
			<div style={{backgroundColor: "#343a40", height: "200px"}}>
				<Row xs={2} md={2} className="justify-content-center">
					<Form inline className="align-items-center" style={{marginTop: "100px"}}>
						  <Form.Control 
						  	onChange={props.handleChange}
						  	size="lg" 
						  	type="text" 
						  	placeholder="Search for photos by username or category " 
						  	style={{width:"600px"}} />
						</Form>
				</Row>
			</div>
		)
};

export default Search