import React, { Component } from "react";

import MenuList from "../../components/customer/menu/MenuList"
import BackBtn from "../../components/customer/BackBtn";
import PoweredByFooter from "../../components/PoweredByFooter";

class Menu extends Component {

  render() {
    const { restaurantId } = this.props.match.params;
    const menuList = this.props.location.state;
    return (
      <>
        <BackBtn to={`/${restaurantId}`} />
        <MenuList restaurantId={restaurantId} data={menuList}/>
        <PoweredByFooter/>
      </>
    );
  }
}

export default Menu;
