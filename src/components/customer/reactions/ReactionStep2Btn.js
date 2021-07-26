import React, { Component } from 'react';

class SubdimensionReactionBtn extends Component {

handleClick = () => {
	this.props.onClick(this.props.name);
}

	render() {
		return (
				<button className="border rounded-xl border-gray-400 bg-white" onClick={this.handleClick}>{this.props.name}</button>
		);
	}
}

export default SubdimensionReactionBtn;
