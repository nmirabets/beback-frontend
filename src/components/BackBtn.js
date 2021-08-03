import React from 'react';

import { ChevronLeftIcon } from '@heroicons/react/outline';

function BackBtn(props) {

	const { style } = props;
	const totalStyle = "flex items-center p-2 w-20" + style

	return (
		<button className={totalStyle} onClick={props.onClick} >
			<ChevronLeftIcon className="w-6 h-6 text-secondary"/>
			<h2 className="text-xl font-light text-secondary ">{props.title}</h2>
		</button>		
	);
}

export default BackBtn;
