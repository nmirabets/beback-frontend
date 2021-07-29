import React from 'react';

function ListItemComp(props) {

  const { Icon } = props;

  function handleOnClick() {
    props.onClick(props.index)
  }

  return (
    <div className="flex p-3 text-xl justify-between border border-gray-300" onClick={handleOnClick}>
      <h3 className="font-light mx-2" >{props.name}</h3>
      <Icon className="w-6 h-6 text-gray-600 mr-2" />
    </div>
  );
}

export default ListItemComp;
