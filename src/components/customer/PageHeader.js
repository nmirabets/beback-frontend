import React, { Component } from 'react';

class PageHeader extends Component {
	render() {
		const { style } = this.props;
		const totalStyle = "flex flex-col items-center justify-center font-thin py-4 m-2 mx-8 border-b border-secondary-dark " + style;
		
		return (
			<h1 className={totalStyle} >{this.props.name}</h1>
		);
	}
}

export default PageHeader;
