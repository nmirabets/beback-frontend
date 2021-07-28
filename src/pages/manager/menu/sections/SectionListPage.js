import React, { Component } from "react";

import { withAuth } from '../../../../providers/AuthProvider';
import { withManager } from "../../../../providers/ManagerProvider";
import Header from '../../../../components/Header';
import HeaderBtn from '../../../../components/HeaderBtn';
import BackBtn from "../../../../components/BackBtn";
import BotNavBar from '../../../../components/BotNavBar';
import ListItemComp from "../../../../components/ListItemComp";

class SectionListPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: {},
  };
  }

  componentDidMount() {
    const { index } = this.props.location.state;
    const { menus } = this.props.contextData;
    this.setState({
      menu: menus[index],
    })
  }

  handleClickRight = () => {
  const { index } = this.props.location.state;
  this.props.history.push({pathname: "/manager/menu/sections-edit", state: { index }});
  }

  handleClickLeft = () => {
    this.props.history.push("/manager/menu/list")
  }
  
  handleItemClick = (index) => {
    this.props.history.push({pathname: "/manager/menu/items", state: { index }});
  }

  render() {

    const { sections } = this.props.contextData;
    const { menu } = this.state;
    const filteredSections = sections.filter( (section) => { return section.menuId === menu._id })

    return (
      <>
        <Header
          mainTitle='Secciones' 
					RightComponent={HeaderBtn}
					rightTitle='Editar'
					onClickRight={this.handleClickRight}
					LeftComponent={BackBtn} 
					leftTitle='Atrás'
					onClickLeft={this.handleClickLeft}
        />
        <div className="flex flex-col">
          {filteredSections.map( (item, index) => {
            return (
              <ListItemComp 
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

export default withAuth(withManager(SectionListPage));
