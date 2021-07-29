import React, { Component } from "react";

import { withAuth } from '../../../../providers/AuthProvider';
import { withManager } from "../../../../providers/ManagerProvider";
import TopNavBar from '../../../../components/TopNavBar';
import HeaderBtn from '../../../../components/HeaderBtn';
import BackBtn from "../../../../components/BackBtn";
import BotNavBar from '../../../../components/BotNavBar';
import ListItemComp from "../../../../components/ListItemComp";
import Spacing from "../../../../components/Spacing";

class ItemListPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurantId: "",
      menuId: "",
      sectionId: "",
      filteredItems: [],
  };
  }

  componentDidMount() {
    const { items } = this.props.contextData;
    const { restaurantId, menuId, sectionId } = this.props.location.state;
    const filteredItems = items.filter( (element) => { return element.sectionId === sectionId });
    this.setState({
      restaurantId,
      menuId,
      sectionId,
      filteredItems,
    })
  }

  handleClickRight = () => {
    // to ItemListEditPage
    const { restaurantId, menuId, sectionId } = this.state;
    this.props.history.push({pathname: "/manager/menu/items-edit", state: { restaurantId, menuId, sectionId }});
  }

  handleClickLeft = () => {
    // back to SectionListPage
    const { restaurantId, menuId, sectionId } = this.state;
    this.props.history.push({pathname: "/manager/menu/sections", state: { restaurantId, menuId, sectionId }});
  }
  
  handleItemClick = (itemIndex) => {
    // to ItemDetailEditPage
    const { filteredItems } = this.state;
    const item = filteredItems[itemIndex];
    this.props.history.push({pathname: "/manager/menu/items-edit-detail", state: { item }});
  }

  render() {

    const { filteredItems } = this.state;

    return (
      <>
        <TopNavBar
          mainTitle='Platos' 
					RightComponent={HeaderBtn}
					rightTitle='Editar'
					onClickRight={this.handleClickRight}
					LeftComponent={BackBtn} 
					leftTitle='Atrás'
					onClickLeft={this.handleClickLeft}
        />
        <Spacing />
        <div className="flex flex-col">
          {filteredItems.map( (item, index) => {
            return (
              <ListItemComp 
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

export default withAuth(withManager(ItemListPage));
