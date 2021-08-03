import React, { Component } from "react";

import { withCustomer } from "../../../providers/CustomerProvider";
import PageHeader from "../../../components/customer/PageHeader";
import PageSubheader from "../../../components/customer/PageSubheader";
import PoweredByFooter from "../../../components/customer/PoweredByFooter";
import MenuBtn from "../../../components/customer/menu/MenuBtn";
import GiveFeedbackBtn from "../../../components/customer/menu/GiveFeedbackBtn";
import Spacing from "../../../components/Spacing";

class ReactionThankyouPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reaction: {},
  };
  }

  handleClickMenu = (index) => {
    const { menus } = this.props.contextData;
    this.props.history.push({pathname: "/restaurant/menu-sections", state: { menu: menus[index] }});
  }

  handleClickFeedback = () => {
    this.props.history.push("/restaurant/reaction-start");
  }

  render() {

    const { menus } = this.props.contextData;
      
    return (
      <div className="flex flex-col mx-auto items-center h-screen justify-between">
        <PageHeader 
          name={"¡Gracias!"}
          style={"mt-12 text-5xl"}
        />
        <PageSubheader
          name={"Tu opinión nos ayuda mejorar :)"}
          style={"text-xl"}
        />
        <div className="flex flex-col items-center text-3xl font-normal text-yellow-700" >
          {menus.map((menu, index) => {
            return (
              <MenuBtn 
                key={index}
                title={menu.name}
                onClick={this.handleClickMenu}
                index={index}
              />
            )
          })}
        </div>
        <GiveFeedbackBtn
          title={"¡Dános más feedback!"}
          onClick={this.handleClickFeedback}
        />
        <Spacing />
        <PoweredByFooter/>
      </div>
    )
  }
}

export default withCustomer(ReactionThankyouPage
  );
