import React, { Component } from "react";

import { withAuth } from '../../../../providers/AuthProvider';
import { withManager } from "../../../../providers/ManagerProvider";
import TopNavBar from '../../../../components/TopNavBar';
import HeaderBtn from '../../../../components/HeaderBtn';
import BotNavBar from '../../../../components/BotNavBar';
import ListItemComp from "../../../../components/ListItemComp";
import Spacing from "../../../../components/Spacing";

class MenuListPage extends Component {

  handleClickRight = () => {
    this.props.history.push("/manager/menu/menu-edit")
  }

  handleClickLeft = () => {
    console.log("Go to menu visualization")
    // this.props.history.push("/manager/menu/list-edit")
  }

  handleItemClick = (menuIndex) => {
    const { activeRestaurantIndex, restaurants, menus } = this.props.contextData;
    const menuId = menus[menuIndex]._id;
    const restaurantId = restaurants[activeRestaurantIndex]._id;
    this.props.history.push({pathname: "/manager/menu/sections", state: { restaurantId, menuId }});
  }

  render() {

    const { menus } = this.props.contextData;

    return (
      <>
        <TopNavBar
          mainTitle='Menús' 
					RightComponent={HeaderBtn}
					rightTitle='Editar'
					onClickRight={this.handleClickRight}
					LeftComponent={HeaderBtn} 
					leftTitle='QR'
					onClickLeft={this.handleClickLeft}
        />
        <Spacing />
        <div className="flex flex-col">
          {menus.map( (item, index) => {
            return (
              <ListItemComp 
                index={index}
                key={index}
                onClick={this.handleItemClick}
                name={item.name}
              />
            )
          })}
        </div>
        <Spacing />
        <BotNavBar activeTab="menu"/>
      </>
    );
  }
}

export default withAuth(withManager(MenuListPage));
