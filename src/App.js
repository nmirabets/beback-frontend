import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './index.css';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
// import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Landing from './pages/customer/Landing';
import Home from './pages/Home';
import Menu from './pages/customer/Menu';
import Feedback from './pages/customer/Feedback';
import Dashboard from './pages/manager/Dashboard';
import AdminMenu from './pages/manager/SetMenu';
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
					<AnonRoute path="/signup" component={Signup} />
					<AnonRoute path="/login" component={Login} />

					<PrivateRoute path="/dashboard" component={Dashboard} />
					<PrivateRoute path="/set-menu" component={AdminMenu} />
					<PrivateRoute path="/settings" component={Settings} />

					<Route exact path="/" component={Home} />
					<Route path="/:restaurantId/menu" component={Menu} />
					<Route path="/:restaurantId/feedback" component={Feedback} />
					<Route exact path="/:restaurantId" component={Landing} />
					
				</Switch>
			</div>
		);
	}
}

export default App;
