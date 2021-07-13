import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

function PrivateRoute({ component: Component, isLoggedIn, ...rest }) {
	return <Route {...rest} render={props => (isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />)} />;
}

export default withAuth(PrivateRoute);
