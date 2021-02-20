import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import { useGoogleAuth } from "../services/googleAuth";



const LogoutPage = () => {
	const { signOut } = useGoogleAuth();

	return(
		<Button variant="danger" onClick={signOut}>Logout</Button>
	);
};


export default LogoutPage;
