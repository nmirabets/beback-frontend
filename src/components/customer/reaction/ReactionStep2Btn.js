import React, { Component } from 'react';

import { ThumbUpIcon, ThumbDownIcon } from '@heroicons/react/outline';

class ReactionStep2Btn extends Component {

handleOnClick = () => {
	this.props.onClick(this.props.name);
}

	render() {

		const { name, isPositive } = this.props;

		return (
			<div className="flex items-center justify-cente border rounded-full border-secondary-dark bg-secondary-light bg-opacity-20 w-1/2 m-2 px-2" onClick={this.handleOnClick} >
				<h1 className="flex justify-center w-44 font-normal text-gray-800 text-base" >{name}</h1>
					{(isPositive ? 
						<ThumbUpIcon 
							className="text-green-800 w-10 h-10" 
						/> : 
						<ThumbDownIcon 
							className="text-red-800 w-10 h-10 " 
						/>	
					)}
			</div>
		);
	}
}

export default ReactionStep2Btn;
