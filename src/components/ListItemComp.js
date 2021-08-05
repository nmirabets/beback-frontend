import React from 'react';

function ListItemComp(props) {

  const { Icon } = props;

  function handleOnClick() {
    props.onClick(props.index)
  }

  return (
    <div className="flex items-center p-3 text-base justify-between border-b border-primary-light" onClick={handleOnClick}>
      <h3 className="font-normal mx-2" >{props.name}</h3>
      <Icon className="w-4 h-4 text-gray-600 mr-2" />
    </div>
  );
}

export default ListItemComp;
