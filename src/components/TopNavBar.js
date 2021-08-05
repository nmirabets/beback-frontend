import React from 'react';

function TopNavBar(props) {
  
  const { RightComponent, LeftComponent } = props;

  function onClickRight() {
    props.onClickRight()
  }

  function onClickLeft() {
    props.onClickLeft()
  }
  // fixed top-0 inset-x-0  
  return (
    <div className= "fixed inset-x-0 flex h-14 items-center justify-center border border-b-1 border-primary bg-primary bg-opacity-20 pt-2">
      <div className="w-1/3 flex justify-start" >
        <LeftComponent title={props.leftTitle} onClick={onClickLeft} />
      </div>
      <h1 className="flex justify-center w-1/3 text-sm font-normal" >{props.mainTitle}</h1>
      <div className="w-1/3 flex justify-end" >
        <RightComponent title={props.rightTitle} onClick={onClickRight} />
      </div>
    </div>
  );
}

export default TopNavBar;
