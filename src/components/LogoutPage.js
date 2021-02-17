import React from 'react';
import { GoogleLogout } from 'react-google-login';

const LogoutPage = () => {
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
