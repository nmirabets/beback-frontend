import React, { Component } from 'react';

class RestaurantHeader extends Component {
	render() {
		return (
			<h1>{this.props.name}</h1>
		);
	}
}

export default RestaurantHeader;
