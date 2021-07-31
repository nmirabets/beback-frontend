import React from 'react';

function HomeNavBar(props) {
  
  const { RightComponent, LeftComponent } = props;

  function onClickRight() {
    props.onClickRight()
  }

  function onClickLeft() {
    props.onClickLeft()
  }
  // fixed top-0 inset-x-0  
  return (
    <div className= "fixed inset-x-0 flex h-15 items-center justify-between border-gray-600 border border-b-1 ">
      <LeftComponent title={props.leftTitle} className="flex w-1/4 text-yellow-700 m-1" onClick={onClickLeft} />
      <img className="flex justify-center h-10 w-10 m-2 transform scale-150" src={props.logo} >{props.mainTitle}</img>
      <RightComponent title={props.rightTitle} className="flex w-1/4 justify-end text-yellow-700 m-1 " onClick={onClickRight} />
    </div>
  );
}


export default HomeNavBar;
