import React, { Component } from "react";

import { withAuth } from '../../../../providers/AuthProvider';
import { withManager } from "../../../../providers/ManagerProvider";
import Header from '../../../../components/Header';
import HeaderBtn from '../../../../components/HeaderBtn';
import BotNavBar from '../../../../components/BotNavBar';
import ListItemComp from "../../../../components/ListItemComp";

class MenuListPage extends Component {

  handleClickRight = () => {
    this.props.history.push("/manager/menu/menu-edit")
  }

  handleClickLeft = () => {
    console.log("Go to menu visualization")
    // this.props.history.push("/manager/menu/list-edit")
  }

  handleItemClick = (index) => {
    this.props.history.push({pathname: "/manager/menu/sections", state: { index }});
  }

  render() {

    const { menus } = this.props.contextData;

    return (
      <>
        <Header
          mainTitle='Menús' 
					RightComponent={HeaderBtn}
					rightTitle='Editar'
					onClickRight={this.handleClickRight}
					LeftComponent={HeaderBtn} 
					leftTitle='Vista QR'
					onClickLeft={this.handleClickLeft}
        />
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
        <BotNavBar activeTab="menu"/>
      </>
    );
  }
}

export default withAuth(withManager(MenuListPage));
