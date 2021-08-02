import React from 'react';

function MenuItemComp(props) {

  return (
    <div className="flex p-3 justify-between border-t border-b border-gray-300 mx-6" >
      <h3 className="font-light text-2xl" >{props.item.name}</h3>
      <span className="font-thin text-xl">{props.item.price + " €"}</span>
    </div>
  );
}

export default MenuItemComp;
