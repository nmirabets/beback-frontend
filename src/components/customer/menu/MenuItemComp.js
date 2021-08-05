import React from 'react';

function MenuItemComp(props) {

  return (
    <div className="flex p-3 items-center justify-between border-b border-gray-300" >
      <h3 className="font-base text-base" >{props.item.name}</h3>
      <span className="font-base text-sm text-primary">{props.item.price + " €"}</span>
    </div>
  );
}

export default MenuItemComp;
