import React from 'react';

function HeaderBtn(props) {
	return (
		<div className="flex m-2" >
			<h2 className="text-xl font-thin text-yellow-700 mx-2">{props.title}</h2>
		</div>	
	);
}

export default HeaderBtn;
