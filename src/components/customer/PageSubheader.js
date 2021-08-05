import React, { Component } from 'react';

class PageSubheader extends Component {
	render() {
		const { style } = this.props;
		const totalStyle = "text-base font-normal p-2 m-2 " + style;
		return (
			<h1 className={totalStyle} >{this.props.name}</h1>
		);
	}
}

export default PageSubheader;
