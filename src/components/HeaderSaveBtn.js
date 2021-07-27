import React from 'react';

function HeaderSaveBtn(props) {
	return (
		<div className="flex m-2" onClick={props.onClick} >
			<h2 className="text-xl font-thin text-yellow-700 mx-2" >{props.title}</h2>
		</div>	
	);
}

export default HeaderSaveBtn;
