import React from 'react';

function SectionBtn(props) {

  function handleOnClick() {
    props.onClick(props.index)
  }

	return (
		<button className="border rounded-full border-yellow-500 font-thin m-2 p-4 my-4" onClick={handleOnClick} type={props.type} value={props.value}>
			{props.title}
		</button>
	);
}

export default SectionBtn;