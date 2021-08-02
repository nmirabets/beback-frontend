import React from 'react';

function MenuBtn(props) {

  function handleOnClick() {
    props.onClick(props.index)
  }

	return (
		<button className="border rounded-full bg-white border-yellow-500 font-thin m-4 p-4" onClick={handleOnClick} type={props.type} value={props.value}>
			{props.title}
		</button>
	);
}

export default MenuBtn;