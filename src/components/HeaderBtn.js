import React from 'react';

function HeaderBtn(props) {
	return (
		<button className="text-m font-light text-secondary mx-4" onClick={props.onClick}>{props.title}</button>	
	);
}

export default HeaderBtn;
