import React from 'react';

import { ThumbUpIcon, ThumbDownIcon }from "@heroicons/react/outline";

function GiveFeedbackBtn(props) {
	return (
    <button className="flex bg-white border rounded-full border-yellow-500 m-2 px-1 py-1" onClick={props.onClick} >
      <div className="flex items-center text-xl font-thin text-yellow-700 mx-2 ">
        <ThumbDownIcon className="text-red-800 w-5 h-5 mx-1" />
        <h1>{props.title}</h1>
        <ThumbUpIcon className="text-green-800 w-5 h-5 mx-1"  />
      </div>
    </button>	
	);
}

export default GiveFeedbackBtn;
