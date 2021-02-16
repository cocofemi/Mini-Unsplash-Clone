import React from 'react';
import { GoogleLogout } from 'react-google-login';

class LogoutPage = () => {
	return(
		<GoogleLogout
		  clientId=""
		  buttonText="Logout"
		  onLogoutSuccess={logout}
		>
		</GoogleLogout>
		)
};


export default LogoutPage;
