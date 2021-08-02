import React, { Component } from 'react';

import { ThumbUpIcon, ThumbDownIcon } from '@heroicons/react/outline';

class ReactionStep2Btn extends Component {

handleClick = () => {
	this.props.onClick(this.props.name);
}

	render() {

		const { name, isPositive } = this.props;

		return (
			<div className="flex items-center justify-center bg-white border rounded-full border-yellow-500 m-4 p-2" onClick={this.handleClick} >
				<h1 className="flex justify-center w-44 font-thin text-gray-800 text-xl" >{name}</h1>
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
