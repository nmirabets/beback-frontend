import React, { Component } from 'react';

class DimensionReactionBtn extends Component {

handleClickNeg = () => {
	this.props.onClick(this.props.name, false);
}

handleClickPos = () => {
	this.props.onClick(this.props.name, true);
}

	render() {
		return (
			<div className="container mx-auto flex" >
				<button onClick={this.handleClickNeg} >Negative</button>
				<h1>{this.props.name}</h1>
				<button onClick={this.handleClickPos} >Positive</button>
			</div>
		);
	}
}

export default DimensionReactionBtn;
