import React from 'react';

function SettingsLabel(props) {
  return (
    <div className={`flex items-center border rounded-md border-gray-400 justify-between mx-5 px-2 my-2 text-l h-12 ${props.style}`} >
      <span className="font-thin">{props.label}</span>
      <span className="mx-4 font-light">{props.item}</span>
    </div>
  );
}

export default SettingsLabel;

