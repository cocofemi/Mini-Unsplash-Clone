import React, { useState, useEffect, Component } from 'react';
import { Row, Col, Button} from 'react-bootstrap';
import { useGoogleAuth } from "../services/googleAuth";

const LoginPage = () => {
    
    const { signIn, googleUser } = useGoogleAuth();
    const [user, setUser] = useState();

    const handleRequest = async () => {
      const googleUser = await signIn()
      // setUser(googleUser)
      // localStorage.setItem("user", JSON.stringify(googleUser));
      localStorage.setItem('isAuth', true)
      console.log(googleUser)
    };
    
    return (
    <div className="login-container">
      <Row className="justify-content-md-center">
      <Col>
	      <h1 className="" style={{textAlign:"center", color:"white"}}>Mini Unsplash Clone</h1>
			<p style={{textAlign:"center", color:"white"}}>Its time to put your best pictures online.</p>
			<Col style={{ marginLeft:"6px"}}>
		        <Button variant="primary" size="lg" onClick={() =>{
              handleRequest();
            }}>
              Sign in with Google
          </Button>{' '}
	        </Col>
        </Col>
      </Row>
    </div>
    );
}

export default LoginPage;