import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BackBtn extends Component {
	render() {
		return (
			<Link className="text-xl" to={this.props.to} >Volver</Link>
		);
	}
}

export default BackBtn;
