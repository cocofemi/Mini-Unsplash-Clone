import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { useGoogleAuth } from "../services/googleAuth";
import Header from  '../components/Header';


const PrivateRoute = ({component: Component, ...rest}) =>  {
	const { isSignedIn } = useGoogleAuth();

	return(
		<div>
			<Route {...rest} render={props => (
                isSignedIn ?
                <Component {...props} />: 
                <Redirect exact from="/home" to="/" />
            )} />
		</div>
		);
};

export default PrivateRoute;