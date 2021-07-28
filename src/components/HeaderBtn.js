import React from 'react';

function HeaderBtn(props) {
	return (
		<button className="flex m-2" onClick={props.onClick} >
			<h2 className="text-xl font-thin text-yellow-700 mx-2">{props.title}</h2>
		</button>	
	);
}

export default HeaderBtn;
