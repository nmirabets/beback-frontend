import React, { Component } from "react";

import { withAuth } from '../../../../providers/AuthProvider';
import { withManager } from "../../../../providers/ManagerProvider";
import TopNavBar from '../../../../components/TopNavBar';
import HeaderBtn from '../../../../components/HeaderBtn';
import BotNavBar from '../../../../components/BotNavBar';
import ListItem from "../../../../components/ListItemComp";
import Spacing from "../../../../components/Spacing";
import { ChevronRightIcon } from '@heroicons/react/outline';

class SectionListEditPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurantId: "",
      menuId: "",
      filteredSections: [],
  };
  }

  componentDidMount() {
    const { restaurantId, menuId } = this.props.location.state;
    const { sections } = this.props.contextData;
    const filteredSections = sections.filter( (element) => { return element.menuId === menuId });

    this.setState({
      restaurantId,
      menuId,
      filteredSections
    })

  }

  handleClickRight = () => {
    // back to SectionListPage
    const { restaurantId, menuId } = this.state;
    this.props.history.push({pathname: "/manager/menu/sections", state: { restaurantId, menuId }});
  }

  handleClickLeft = () => {
    // new item -> go to SectionDetailEditPage
    const { restaurantId, menuId } = this.state;
    this.props.history.push({pathname: "/manager/menu/sections-edit-detail", state: { section: { restaurantId, menuId }, isNew: true }});
  }

  handleItemClick = (sectionIndex) => {
    // edit item -> go to SectionDetailEditPage
    const { filteredSections } = this.state;
    const section = filteredSections[sectionIndex];
    this.props.history.push({ pathname: '/manager/menu/sections-edit-detail', state:  { section, isNew: false } });
  }

  render() {

    const { filteredSections } = this.state;

    return (
      <>
        <TopNavBar
          mainTitle='Editar sección' 
					RightComponent={HeaderBtn}
					rightTitle='Guardar'
					onClickRight={this.handleClickRight}
					LeftComponent={HeaderBtn} 
					leftTitle='Añadir'
					onClickLeft={this.handleClickLeft}
        />
        <Spacing />
        <div className="flex flex-col">
          {filteredSections.map( (item, index) => {
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

export default withAuth(withManager(SectionListEditPage));
