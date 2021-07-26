import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withCustomer } from "../../../providers/CustomerProvider";
import { ThumbUpIcon, ThumbDownIcon } from '@heroicons/react/outline';

class ReactionStep1Btn extends Component {

handleClickNeg = () => {
	this.props.onClick(this.props.name, false);
}

handleClickPos = () => {
	this.props.onClick(this.props.name, true);
}

	render() {
		return (
			<div className="flex flex-row items-center justify-center mx-12 py-3 my-2 border rounded-xl border-gray-400 bg-white">
				<Link to="/restaurant/reaction-rest" >
					<ThumbUpIcon className="text-green-800 w-10 h-10 " onClick={this.handleClickPos} />
					<h1>{this.props.name}</h1>
					<ThumbDownIcon className="text-red-800 w-10 h-10 " onClick={this.handleClickNeg} />	
				</Link>
			</div>
		);
	}
}

export default withCustomer(ReactionStep1Btn);
