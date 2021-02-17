import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import {Container, Row, Col} from 'react-bootstrap';
import googleLogin from "../services/googleLogin";

class LoginPage extends Component {

  render() {

  	const responseGoogle = async(response) => {
      let googleResponse  = await googleLogin(response.accessToken)
      console.log(googleResponse);
      console.log(response);
    }

    return (
    <div className="login-container">
      <Row className="justify-content-md-center">
      <Col>
	      <h1 className="" style={{textAlign:"center", color:"white"}}>Mini Unsplash Clone</h1>
			<p style={{textAlign:"center", color:"white"}}>Its time to put your best pictures online.</p>
			<Col style={{ marginLeft:"6px"}}>
		        <GoogleLogin 
		          clientId="203425879861-duk66q8klnol7iojm19ppqks85v3hud5.apps.googleusercontent.com"
              buttonText="LOGIN WITH GOOGLE"
		          onSuccess={responseGoogle}
		          onFailure={responseGoogle}
		          redirectUri="http://localhost:300/home/"
		        />
	        </Col>
        </Col>
      </Row>
    </div>
    );
  }
}

export default LoginPage;