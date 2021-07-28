import React from 'react';

import { ChevronRightIcon } from '@heroicons/react/outline';

function ListItemComp(props) {

  function handleOnClick() {
    props.onClick(props.index)
  }

  return (
    <div className="flex p-3 text-xl justify-between border border-gray-300" onClick={handleOnClick}>
      <h3 className="font-light mx-2" onClick={handleOnClick}>{props.name}</h3>
      <ChevronRightIcon className="w-6 h-6 text-gray-600" onClick={handleOnClick} />
    </div>
  );
}

export default ListItemComp;
