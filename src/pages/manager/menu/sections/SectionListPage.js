import React, { Component } from "react";

import { withAuth } from '../../../../providers/AuthProvider';
import { withManager } from "../../../../providers/ManagerProvider";
import TopNavBar from '../../../../components/TopNavBar';
import HeaderBtn from '../../../../components/HeaderBtn';
import BackBtn from "../../../../components/BackBtn";
import BotNavBar from '../../../../components/BotNavBar';
import ListItemComp from "../../../../components/ListItemComp";
import Spacing from "../../../../components/Spacing";
import { ChevronRightIcon } from '@heroicons/react/outline';

class SectionListPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurantId: "",
      menuId: "",
      filteredSections: [],
  };
  }

  componentDidMount() {
    const { sections } = this.props.contextData;
    const { restaurantId, menuId } = this.props.location.state;

    const filteredSections = sections.filter( (element) => { return element.menuId === menuId });

    this.setState({
      restaurantId,
      menuId,
      filteredSections
    })
  }

  handleClickRight = () => {
  const { restaurantId, menuId } = this.state;
  this.props.history.push({pathname: "/manager/menu/sections-edit", state: { restaurantId, menuId }});
  }

  handleClickLeft = () => {
    this.props.history.push("/manager/menu/list")
  }
  
  handleItemClick = (sectionIndex) => {
    // to item list
    const { restaurantId, menuId, filteredSections } = this.state;
    const sectionId = filteredSections[sectionIndex]._id;
    this.props.history.push({pathname: "/manager/menu/items", state: { restaurantId, menuId, sectionId }});
  }

  render() {

    const { filteredSections } = this.state;

    return (
      <>
        <TopNavBar
          mainTitle='Secciones' 
					RightComponent={HeaderBtn}
					rightTitle='Editar'
					onClickRight={this.handleClickRight}
					LeftComponent={BackBtn} 
					leftTitle='Atrás'
					onClickLeft={this.handleClickLeft}
        />
        <Spacing />
        <div className="flex flex-col">
          {filteredSections.map( (item, index) => {
            return (
              <ListItemComp 
                index={index}
                key={index}
                onClick={this.handleItemClick}
                name={item.name}
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

export default withAuth(withManager(SectionListPage));
