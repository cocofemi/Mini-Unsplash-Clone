import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

const Search = (props) => {
	return (
			<div style={{backgroundColor: "#343a40", height: "200px"}}>
				<Row className="justify-content-center">
					<Form inline className="align-items-center" style={{marginTop: "100px"}}>
						  <Form.Control size="lg" 
						  	type="text" 
						  	placeholder="Search for photos by username, caption or category " 
						  	style={{marginRight: "20px", width:"500px"}} />
						  <Button type="submit" className="mb-2" size="lg" style={{marginTop: "8px"}}>
						     Submit
						      </Button>
						</Form>
				</Row>
			</div>
		)
};

export default Search