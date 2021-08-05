import React from 'react';

function SectionHeader(props) {
  return (
    <h2 className="text-m text-gray-800 font-normal m-5 p-2 border-b-2 border-primary-dark">
      {props.title}
    </h2>
  );
}

export default SectionHeader;