import React from 'react';

function RoundedBtn(props) {
	return (
		<button className="flex m-2 border rounded-full border-secondary-light px-1 py-1 w-20 items-center justify-center" onClick={props.onClick} type={props.type} value={props.value}>
			<h2 className="text-l font-light text-secondary-light mx-2 ">{props.title}</h2>
		</button>	
	);
}

export default RoundedBtn;
