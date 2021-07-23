import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withAuth } from '../providers/AuthProvider';

class Navbar extends Component {
	render() {
		return (
			<div className="container mx-auto flex" >
				<Link to="/">Home</Link>
				<Link to="/login">Login</Link>
				<Link to="/signup">Signup</Link>
			</div>
		);
	}
}

export default withAuth(Navbar);
