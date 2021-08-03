import React from 'react';

function MenuBtn(props) {

  function handleOnClick() {
    props.onClick(props.index)
  }

	return (
		<button className="border rounded-full bg-secondary-light bg-opacity-60 border-secondary-dark text-white font-light m-4 p-4 " onClick={handleOnClick} type={props.type} value={props.value}>
			{props.title}
		</button>
	);
}

export default MenuBtn;