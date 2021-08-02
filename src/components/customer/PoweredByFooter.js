import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PoweredByFooter extends Component {
	render() {
		return (
			<Link className="text-s text-thin text-yellow-800 " to={'/'} >powered by Vapp</Link>
		);
	}
}

export default PoweredByFooter;
