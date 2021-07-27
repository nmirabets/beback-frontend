import React from 'react';

function SectionHeader(props) {
  return (
    <h2 className="text-xl text-gray-800 font-normal m-5 p-2 border-b-2 border-gray-400">
      {props.title}
    </h2>
  );
}

export default SectionHeader;