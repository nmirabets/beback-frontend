import React, { Component } from 'react';

class PageHeader extends Component {
	render() {
		return (
			<h1 className="flex justify-center text-4xl font-light py-4 mb-2 mx-8 border-b border-yellow-900" >{this.props.name}</h1>
		);
	}
}

export default PageHeader;
