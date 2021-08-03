import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PoweredByFooter extends Component {
	render() {
		return (
			<Link className="flex justify-center fixed bottom-0 inset-x-0 text-s font-light text-secondary-dark bg-white" to={'/'} >powered by Vapp</Link>
		);
	}
}

export default PoweredByFooter;
