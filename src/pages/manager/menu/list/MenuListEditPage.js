import React, { Component } from "react";

import { withAuth } from '../../../../providers/AuthProvider';
import { withManager } from "../../../../providers/ManagerProvider";
import TopNavBar from '../../../../components/TopNavBar';
import HeaderBtn from '../../../../components/HeaderBtn';
import BotNavBar from '../../../../components/BotNavBar';
import ListItemComp from "../../../../components/ListItemComp";
import Spacing from "../../../../components/Spacing";
import { ChevronRightIcon } from '@heroicons/react/outline';

class MenuEditListPage extends Component {
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
    const { restaurantId } = this.state;
    this.props.history.push({pathname: "/manager/menu/menu-edit-detail", state: { menu: { restaurantId }, isNew: true }});
  }

  handleItemClick = (index) => {
    const { menus } = this.props.contextData;
    const menu = menus[index];
    this.props.history.push({ pathname: '/manager/menu/menu-edit-detail', state:  { menu, isNew: false } });
  }

  render() {

    const { menus } = this.props.contextData;

    return (
      <>
        <TopNavBar
          mainTitle='Editar menú' 
					RightComponent={HeaderBtn}
					rightTitle='Guardar'
					onClickRight={this.handleClickRight}
					LeftComponent={HeaderBtn} 
					leftTitle='Añadir'
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
								Icon={ChevronRightIcon}
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

export default withAuth(withManager(MenuEditListPage));
