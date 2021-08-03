import React, { Component } from 'react';

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
			<div className="flex items-center justify-center py-2">
				<div className="border rounded-full border-secondary-dark bg-secondary-light bg-opacity-20 m-2 p-4 " >
					<ThumbDownIcon 
						className="text-red-800 w-10 h-10 " 
						onClick={this.handleClickNeg} 
					/>	
				</div>
				<h1 className="flex justify-center w-32 font-thin text-gray-800" >{this.props.name}</h1>
				<div className="border rounded-full border-secondary-dark bg-secondary-light bg-opacity-20 m-2 p-4" >
					<ThumbUpIcon 
						className="text-green-800 w-10 h-10" 
						onClick={this.handleClickPos} 
					/>
				</div>
			</div>
		);
	}
}

export default withCustomer(ReactionStep1Btn);
