import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BotNavBar extends Component {
	render() {
		return (
			<div className="fixed bottom-0 inset-x-0 flex justify-between bg-gray-500 ">
				<Link className="text-xl" to='/dashboard' >Dashboard</Link>
				<Link className="text-xl" to='/set-menu' >Menu</Link>
				<Link className="text-xl" to='/settings' >Settings</Link>
			</div>
		);
	}
}

export default BotNavBar;
