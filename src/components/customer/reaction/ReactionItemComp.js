import React from 'react';

import { ThumbUpIcon, ThumbDownIcon } from '@heroicons/react/solid';

function ReactionItemComp(props) {

  function handleOnClick() {
    props.onClick(props.item)
  }

  const { item, isPositive } = props;

  return (
    <div className="flex justify-between items-center bg-secondary bg-opacity-10 border border-secondary-dark rounded-full m-4 p-2" onClick={handleOnClick} >
      <div className="flex items-center">
        <h1 className="text-gray-800 text-base mx-5" >
          {item.name}
        </h1>
        <span className="text-gray-500 text-xs" >{item.price + " €"}</span>
      </div>
      {(isPositive ? 
        <ThumbUpIcon 
          className="text-green-800 w-5 h-5 mr-5" 
        /> : 
        <ThumbDownIcon 
          className="text-red-800 w-5 h-5" 
        />	
      )}
    </div>
  );
}

export default ReactionItemComp;
