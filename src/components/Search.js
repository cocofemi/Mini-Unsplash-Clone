import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

const Search = (props) => {
	return (
			<div style={{backgroundColor: "whitesmoke", height: "200px"}}>
				<Row className="justify-content-center">
					<Col xs={10} lg={6}>
						<Form inline className="align-items-center" style={{marginTop: "100px"}}>
							  <Form.Control 
							  	onChange={props.handleChange}
							  	size="lg" 
							  	type="text" 
							  	placeholder="Search for photos by category i.e Nature, Adventure or caption" 
							  	style={{width:"600px"}} />
							</Form>
					</Col>
				</Row>
			</div>
		)
};

export default Search