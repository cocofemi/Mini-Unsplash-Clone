import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import CustomLayout from '../components/CustomLayout';

const AppRouter = () => {
	<div>
		<Switch>
		<Route path="/" component={LoginPage} exact={true}/>
		<Route path="/home" component={CustomLayout} exact={true}/>
		</Switch>
	</div>
}