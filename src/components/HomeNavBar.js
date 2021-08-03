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
    <div className= "fixed inset-x-0 flex h-15 items-center justify-between border-gray-600 border border-b-1">
      <LeftComponent title={props.leftTitle} className="flex w-1/4 m-1 " onClick={onClickLeft} />
      <img className="flex justify-center w-20 m-2 transform scale-25" src={props.logo} >{props.mainTitle}</img>
      <RightComponent title={props.rightTitle} className="flex w-1/4 justify-end m-1 " onClick={onClickRight} />
    </div>
  );
}


export default HomeNavBar;
