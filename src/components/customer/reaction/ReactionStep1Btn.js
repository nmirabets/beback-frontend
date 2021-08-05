import React, { Component } from 'react';

import { withCustomer } from "../../../providers/CustomerProvider";
import { ThumbUpIcon, ThumbDownIcon } from '@heroicons/react/solid';

class ReactionStep1Btn extends Component {

handleClickNeg = () => {
	this.props.onClick(this.props.name, false);
}

handleClickPos = () => {
	this.props.onClick(this.props.name, true);
}

	render() {
		return (
			<div className="w-screen flex items-center justify-center py-2">
				<div className="border rounded-full border-secondary-dark bg-secondary-light bg-opacity-20 p-4 " >
					<ThumbDownIcon 
						className="text-red-800 w-5 h-5 " 
						onClick={this.handleClickNeg} 
					/>	
				</div>
				<h1 className="w-1/3 flex justify-center text-gray-800" >{this.props.name}</h1>
				<div className="border rounded-full border-secondary-dark bg-secondary-light bg-opacity-20 p-4" >
					<ThumbUpIcon 
						className="text-green-800 w-5 h-5" 
						onClick={this.handleClickPos} 
					/>
				</div>
			</div>
		);
	}
}

export default withCustomer(ReactionStep1Btn);
