import React from 'react';
import { GoogleLogout } from 'react-google-login';

const LogoutPage = () => {
	return(
		<GoogleLogout
		  clientId="203425879861-duk66q8klnol7iojm19ppqks85v3hud5.apps.googleusercontent.com"
		  buttonText="Logout"
		  
		>
		</GoogleLogout>
	);
};


export default LogoutPage;
