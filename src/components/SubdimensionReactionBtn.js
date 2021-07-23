import React, { Component } from 'react';

class SubdimensionReactionBtn extends Component {

handleClick = () => {
	this.props.onClick(this.props.name);
}

	render() {
		return (
			<div className="container mx-auto flex" >
				<button onClick={this.handleClick}>{this.props.name}</button>
			</div>
		);
	}
}

export default SubdimensionReactionBtn;
