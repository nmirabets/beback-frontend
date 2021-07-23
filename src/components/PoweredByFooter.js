import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PoweredByFooter extends Component {
	render() {
		return (
			<Link className="text-xl" to={'/'} >powered by BeBack</Link>
		);
	}
}

export default PoweredByFooter;
