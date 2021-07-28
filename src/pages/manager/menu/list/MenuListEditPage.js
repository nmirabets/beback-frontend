import React, { Component } from "react";

import { withAuth } from '../../../../providers/AuthProvider';
import { withManager } from "../../../../providers/ManagerProvider";
import Header from '../../../../components/Header';
import HeaderBtn from '../../../../components/HeaderBtn';
import BotNavBar from '../../../../components/BotNavBar';
import ListItemComp from "../../../../components/ListItemComp";

class MenuEditListPage extends Component {

  handleClickRight = () => {
    this.props.history.push("/manager/menu/list")
  }

  handleClickLeft = () => {
    this.props.history.push({pathname: "/manager/menu/menu-edit-detail", state: { isNew: true }});
  }

  handleItemClick = (index) => {
    this.props.history.push({ pathname: '/manager/menu/menu-edit-detail', state:  { index, isNew: false } });
  }

  render() {

    const { menus } = this.props.contextData;

    return (
      <>
        <Header
          mainTitle='Editar menú' 
					RightComponent={HeaderBtn}
					rightTitle='Guardar'
					onClickRight={this.handleClickRight}
					LeftComponent={HeaderBtn} 
					leftTitle='Añadir'
					onClickLeft={this.handleClickLeft}
        />
        <div className="flex flex-col">
          {menus.map( (item, index) => {
            return (
              <ListItemComp 
                index={index}
                key={index}
                name={item.name}
                onClick={this.handleItemClick}
              />
            )
          })}

        </div>
        <BotNavBar activeTab="menu"/>
      </>
    );
  }
}

export default withAuth(withManager(MenuEditListPage));
