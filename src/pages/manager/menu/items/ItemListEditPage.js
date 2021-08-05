import React, { Component } from "react";

import { withAuth } from '../../../../providers/AuthProvider';
import { withManager } from "../../../../providers/ManagerProvider";
import TopNavBar from '../../../../components/TopNavBar';
import HeaderBtn from '../../../../components/HeaderBtn';
import BotNavBar from '../../../../components/BotNavBar';
import ListItem from "../../../../components/ListItemComp";
import Spacing from "../../../../components/Spacing";
import { ChevronRightIcon } from '@heroicons/react/outline';

class ItemListEditPage extends Component {
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
    const { restaurantId, menuId, sectionId } = this.props.location.state;
    const { items } = this.props.contextData;

    const filteredItems = items.filter( (element) => { return element.sectionId === sectionId });

    this.setState({
      restaurantId,
      menuId,
      sectionId,
      filteredItems,
    })
  }

  handleClickRight = () => {
    // back to ItemListPage
    const { restaurantId, menuId, sectionId } = this.state;
    this.props.history.push({pathname: "/manager/menu/items", state: { restaurantId, menuId, sectionId }});
  }

  handleClickLeft = () => {
    // new item
    const { restaurantId, menuId, sectionId } = this.state;
    this.props.history.push({pathname: "/manager/menu/items-edit-detail", state: { item: { restaurantId, menuId, sectionId }, isNew: true }});
  }

  handleItemClick = (itemIndex) => {
    // edit item
    const { filteredItems } = this.state;
    const item = filteredItems[itemIndex];
    this.props.history.push({ pathname: '/manager/menu/items-edit-detail', state:  { item, isNew: false } });
  }

  render() {

    const { filteredItems } = this.state;

    return (
      <>
        <div className="bg-white">
          <TopNavBar
            mainTitle='Editar platos' 
            RightComponent={HeaderBtn}
            rightTitle='Guardar'
            onClickRight={this.handleClickRight}
            LeftComponent={HeaderBtn} 
            leftTitle='Añadir'
            onClickLeft={this.handleClickLeft}
          />
        </div>
        <Spacing />
        <div className="flex flex-col">
          {filteredItems.map( (item, index) => {
            return (
              <ListItem 
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

export default withAuth(withManager(ItemListEditPage));
