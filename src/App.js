import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './index.css';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Landing from './pages/customer/Landing';
import Home from './pages/Home';
import Menu from './pages/customer/Menu';
import Feedback from './pages/customer/Feedback';
import Dashboard from './pages/manager/Dashboard';
import AdminMenu from './pages/manager/AdminMenu';
import Settings from './pages/manager/Settings';

class App extends Component {
	render() {
		const { isLoading } = this.props;
		if (isLoading) {
			return <div>loading ... </div>;
		}
		return (
			<div className="container">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/:restaurantId" component={Landing} />
					<Route path="/:restaurantId/menu" component={Menu} />
					<Route path="/:restaurantId/feedback" component={Feedback} />

					<AnonRoute path="/signup" component={Signup} />
					<AnonRoute path="/login" component={Login} />
					
					<PrivateRoute path="/private" component={Private} />
					<PrivateRoute path="/dashboard" component={Dashboard} />
					<PrivateRoute path="/admin-menu" component={AdminMenu} />
					<PrivateRoute path="/settings" component={Settings} />
				</Switch>
			</div>
		);
	}
}

export default App;
