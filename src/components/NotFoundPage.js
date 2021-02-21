import React, { Row, Col } from 'react';
import { Link } from 'react-router-dom';


const NotFoundPage = () => {
	return (
		<div className="login-container">
		 	<h1 className="" style={{textAlign:"center", color:"white"}}>This page does not exist - <Link to="/home">Go Home</Link></h1>
		</div>
	);

	};

export default NotFoundPage;