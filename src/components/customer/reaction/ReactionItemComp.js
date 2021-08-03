import React from 'react';

import { ThumbUpIcon, ThumbDownIcon } from '@heroicons/react/outline';

function ReactionItemComp(props) {

  function handleOnClick() {
    props.onClick(props.item)
  }

  const { item, isPositive } = props;

  return (
    <div className="flex justify-between items-center bg-secondary bg-opacity-10 border border-secondary-dark rounded-full m-4 p-2" onClick={handleOnClick} >
      <h1 className="flex font-light text-gray-800 text-xl ml-5" >
        {item.name + " - " + item.price + " €"}
      </h1>
      {(isPositive ? 
        <ThumbUpIcon 
          className="text-green-800 w-10 h-10 mr-5" 
        /> : 
        <ThumbDownIcon 
          className="text-red-800 w-10 h-10" 
        />	
      )}
    </div>
  );
}

export default ReactionItemComp;
