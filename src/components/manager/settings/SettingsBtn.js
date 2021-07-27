import React from 'react';

import { ChevronRightIcon } from '@heroicons/react/outline';

function SettingsBtn(props) {
  return (
    <div className={`flex items-center border rounded-md border-gray-400 justify-between mx-5 px-2 h-12 my-2 ${props.style}`}  onClick={props.onClick}>
      <p className="text-l font-light ">{props.title}</p>
      <ChevronRightIcon className="text-gray-600 w-8 h-8 text-thin"/>
    </div>
  );
}

export default SettingsBtn;