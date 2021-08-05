import React from 'react';

import { ThumbUpIcon, ThumbDownIcon }from "@heroicons/react/outline";

function GiveFeedbackBtn(props) {
	return (
    <button className="flex bg-secondary bg-opacity-20 border border-secondary-dark rounded-full " onClick={props.onClick} >
      <div className="flex items-center text-sm font-normal text-gray-600 mx-2 ">
        <ThumbDownIcon className="text-red-800 w-4 h-4 mx-1" />
        <h1>{props.title}</h1>
        <ThumbUpIcon className="text-green-800 w-4 h-4 mx-1"  />
      </div>
    </button>	
	);
}

export default GiveFeedbackBtn;
