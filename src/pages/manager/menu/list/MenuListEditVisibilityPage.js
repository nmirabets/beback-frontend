import React, { Component } from "react";

import { withAuth } from '../../../../providers/AuthProvider';
import { withManager } from "../../../../providers/ManagerProvider";
import TopNavBar from '../../../../components/TopNavBar';
import HeaderBtn from '../../../../components/HeaderBtn';
import BotNavBar from '../../../../components/BotNavBar';
import ListItemComp from "../../../../components/ListItemComp";
import Spacing from "../../../../components/Spacing";
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import apiClient from '../../../../services/managerApiClient';

class MenuListEditVisibilityPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurantId: "",
    }
		this.nameInput = React.createRef();
  }

  componentDidMount() {
    const { activeRestaurantIndex, restaurants } = this.props.contextData;
    const restaurantId = restaurants[activeRestaurantIndex]._id;
		this.setState({
			restaurantId,
		})
  }

  handleClickRight = () => {
    this.props.history.push("/manager/menu/list")
  }

  handleClickLeft = () => {

  }

  handleItemClick = (index) => {

    const { menus } = this.props.contextData;
    const menu = menus[index];
    menu.isVisible = !menu.isVisible;
    apiClient.updateMenu(menu);
    this.setState({});
  }

  render() {

    const { menus } = this.props.contextData;

    return (
      <>
        <TopNavBar
          mainTitle='Mostrar menú' 
					RightComponent={HeaderBtn}
					rightTitle='Guardar'
					onClickRight={this.handleClickRight}
					LeftComponent={HeaderBtn} 
					leftTitle=''
					onClickLeft={this.handleClickLeft}
        />
        <Spacing />
        <div className="flex flex-col">
          {menus.map( (item, index) => {
            return (
              <ListItemComp 
                index={index}
                key={index}
                name={item.name}
                onClick={this.handleItemClick}
								Icon={(item.isVisible ? EyeIcon : EyeOffIcon)}
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

export default withAuth(withManager(MenuListEditVisibilityPage));
