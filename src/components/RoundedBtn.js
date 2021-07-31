import React from 'react';

function RoundedBtn(props) {
	return (
		<button className="flex m-2 border rounded-full border-yellow-500 px-1 py-1" onClick={props.onClick} type={props.type} value={props.value}>
			<h2 className="text-l font-thin text-yellow-700 mx-2 ">{props.title}</h2>
		</button>	
	);
}

export default RoundedBtn;
