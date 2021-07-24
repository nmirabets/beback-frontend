import React, { Component } from 'react';
import { withAuth } from "../providers/AuthProvider";

class Private extends Component {
	render() {
		return (
			<div>
				<h1>Manager Dashboard</h1>
			</div>
		);
	}
}

export default withAuth(Private);
