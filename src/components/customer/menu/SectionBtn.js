import React from 'react';

function SectionBtn(props) {

  function handleOnClick() {
    props.onClick(props.index)
  }

	return (
		<button className="w-60 text-base font-normal border rounded-full border-secondary-dark bg-secondary-light bg-opacity-30 text-gray-800 m-2 px-2 " onClick={handleOnClick} type={props.type} value={props.value}>
			{props.title}
		</button>
	);
}

export default SectionBtn;