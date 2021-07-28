import React, { Component } from "react";

import { withAuth } from '../../../../providers/AuthProvider';
import { withManager } from "../../../../providers/ManagerProvider";
import Header from '../../../../components/Header';
import HeaderBtn from '../../../../components/HeaderBtn';
import BotNavBar from '../../../../components/BotNavBar';
import ListItem from "../../../../components/ListItemComp";

class SectionListEditPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: {},
      menuIndex: "",
  };
  }

  componentDidMount() {
    const { index } = this.props.location.state;
    const { menus } = this.props.contextData;
    this.setState({
      menu: menus[index],
      menuIndex: index,
    })
  }

  handleClickRight = () => {
    const { menuIndex } = this.state;
    this.props.history.push({pathname: "/manager/menu/sections", state: { index: menuIndex }});
  }

  handleClickLeft = () => {
    const { menu } = this.state;
    this.props.history.push({pathname: "/manager/menu/sections-edit-detail", state: { menu, isNew: true }});
  }

  handleItemClick = (index) => {
    this.props.history.push({ pathname: '/manager/menu/sections-edit-detail', state:  { index, isNew: false } });
  }

  render() {

    const { sections } = this.props.contextData;
    const { menu } = this.state;
    const filteredSections = sections.filter( (section) => { return section.menuId === menu._id })

    return (
      <>
        <Header
          mainTitle='Editar sección' 
					RightComponent={HeaderBtn}
					rightTitle='Guardar'
					onClickRight={this.handleClickRight}
					LeftComponent={HeaderBtn} 
					leftTitle='Añadir'
					onClickLeft={this.handleClickLeft}
        />
        <div className="flex flex-col">
          {filteredSections.map( (item, index) => {
            return (
              <ListItem 
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

export default withAuth(withManager(SectionListEditPage));
