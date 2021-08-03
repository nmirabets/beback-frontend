import React from 'react';

function HeaderSaveBtn(props) {
	return (
		<div className="flex m-2 w-20" onClick={props.onClick} >
			<h2 className="text-xl font-light  text-secondary mx-2" >{props.title}</h2>
		</div>	
	);
}

export default HeaderSaveBtn;
