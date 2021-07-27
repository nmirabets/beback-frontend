import React from 'react';
import { Link } from "react-router-dom";

function PageHeader(props) {

  const { RightComponent, LeftComponent } = props;

  return (
    <header className= "flex h-14 items-center justify-center border-gray-600 border border-b-1 bg-gray-200">
      <Link to={props.clickLeftTo} className="flex w-1/4" >
        <LeftComponent title={props.leftTitle} className="flex-none text-yellow-700 m-4" onClick={props.onClickLeft} />
      </Link>
      <h1 className="flex justify-center flex-grow text-2xl font-extralight" >{props.mainTitle}</h1>
      <Link to={props.clickRightTo} className= "flex w-1/4 justify-end" >
        <RightComponent title={props.rightTitle} className="flex text-yellow-700 m-4 " onClick={props.onClickRight} />
      </Link>
    </header>
  );
}

export default PageHeader;
