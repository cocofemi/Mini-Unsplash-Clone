import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Upload from './Upload';

const Header = (props) => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{
    			borderBottomWidth: "thin",
    			borderBottomColor: "white",
    			borderBottomStyle: "solid"}}>
		  <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
		  <Navbar.Toggle />
		  <Navbar.Collapse className="justify-content-end">
		  <Upload />
		    <Navbar.Text>
		      Signed in as: <a href="#login">{props.user}</a>
		    </Navbar.Text>
		  </Navbar.Collapse>
		</Navbar>
		);
}

export default Header;