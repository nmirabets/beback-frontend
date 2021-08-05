import React from 'react';

function MenuBtn(props) {

  function handleOnClick() {
    props.onClick(props.index)
  }

	return (
		<button className="w-2/3 text-base font-normal border rounded-full border-secondary-dark bg-secondary-light bg-opacity-30 text-gray-800 my-4 p-2 " onClick={handleOnClick} type={props.type} value={props.value}>
			{props.title}
		</button>
	);
}

export default MenuBtn;