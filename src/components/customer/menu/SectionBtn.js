import React from 'react';

function SectionBtn(props) {

  function handleOnClick() {
    props.onClick(props.index)
  }

	return (
		<button className="border rounded-full border-secondary-dark bg-secondary-light bg-opacity-60 text-white font-light m-2 p-4 my-4" onClick={handleOnClick} type={props.type} value={props.value}>
			{props.title}
		</button>
	);
}

export default SectionBtn;