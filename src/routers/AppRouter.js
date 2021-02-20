import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LoginPage from '../components/LoginPage';
import CustomLayout from '../components/CustomLayout';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => {
	return (
		<Router>
			<div>
				<Switch>
				<PublicRoute path="/" component={LoginPage} exact={true}/>
				<PrivateRoute path="/home" component={CustomLayout}/>
				<Route component={NotFoundPage} />
				</Switch>
			</div>
		</Router>
	);
}


export default AppRouter;