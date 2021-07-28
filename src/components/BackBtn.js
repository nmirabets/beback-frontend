import React from 'react';

import { ChevronLeftIcon } from '@heroicons/react/outline';

function BackBtn(props) {
	return (
		<button className="flex items-center m-2" onClick={props.onClick} >
			<ChevronLeftIcon className="w-6 h-6 text-yellow-700"/>
			<h2 className="text-xl font-thin text-yellow-700">{props.title}</h2>
		</button>		
	);
}

export default BackBtn;
