import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import { useGoogleAuth } from "../services/googleAuth";



const LogoutPage = () => {
	const { signOut } = useGoogleAuth();

	const handleRequest = async () => {
	   const googleUser = await signOut();
	   localStorage.removeItem('isAuth')
	}

	return(
		<Button variant="danger" onClick={handleRequest}>Logout</Button>
	);
};


export default LogoutPage;
