import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Upload from './Upload';
import LogoutPage from './LogoutPage';
import {Modal, Button} from 'react-bootstrap';

const Header = (props) => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{
    			borderBottomWidth: "thin",
    			borderBottomColor: "white",
    			borderBottomStyle: "solid"}}>
		  <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
		  <Navbar.Toggle />
		  <Navbar.Collapse className="justify-content-end">
		  <Upload handleSubmitForm={props.handleSubmitForm}/>
		    <Navbar.Text>
		      <LogoutPage />
		    </Navbar.Text>
		  </Navbar.Collapse>
		</Navbar>
		);
}

export default Header;