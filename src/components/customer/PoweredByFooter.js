import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PoweredByFooter extends Component {
	render() {
		return (
			<Link className="text-s text-thin text-yellow-700" to={'/'} >powered by V</Link>
		);
	}
}

export default PoweredByFooter;
