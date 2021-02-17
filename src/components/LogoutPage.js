import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';

class LogoutPage extends Component {
	Constructor(props){
		super(props)
	}
	this.state {
		isLoggedIn: false
	}
	return(
		<GoogleLogout
		  clientId="process.env.REACT_APP_GOOGLE_CLIENT_ID"
		  buttonText="Logout"
		  onLogoutSuccess={response() => {this.state(() => { return {isLoggedIn: false} }) }}
		  redirectUri="http://localhost:300/"
		>
		</GoogleLogout>
	);
};


export default LogoutPage;
