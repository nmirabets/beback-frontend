import React, { Component } from 'react';

import { ChevronLeftIcon } from '@heroicons/react/outline';

class BackBtn extends Component {

	handleOnClick = () => {
		this.props.onClick()
	}

	render() {

		return (
		<button className="flex flex-row place-items-center m-2 w-1/4" onClick={this.handleOnClick} >
			<ChevronLeftIcon className="w-6 h-6 text-yellow-700"/>
			<h2 className="flex justify-center text-xl font-thin text-yellow-700">{this.props.title}</h2>
		</button>		
		);
	}
}

export default BackBtn;
