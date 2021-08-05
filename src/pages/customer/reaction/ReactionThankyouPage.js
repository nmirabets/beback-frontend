import React, { Component } from "react";

import { withCustomer } from "../../../providers/CustomerProvider";
import PageHeader from "../../../components/customer/PageHeader";
import PageSubheader from "../../../components/customer/PageSubheader";
import PoweredByFooter from "../../../components/customer/PoweredByFooter";
import MenuBtn from "../../../components/customer/menu/MenuBtn";
import GiveFeedbackBtn from "../../../components/customer/menu/GiveFeedbackBtn";

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
      <div className="w-screen h-screen mx-auto">
        <div className="h-1/3 flex flex-col items-center justify-center">
          <PageHeader 
            name={"¡Gracias!"}
            style={"text-3xl"}
          />
          <PageSubheader
            name={"Tu opinión nos ayuda mejorar :)"}
            style={"text-lg"}
          />
        </div>
        <div className="h-1/3 flex flex-col items-center justify-center" >
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
        <div className="h-1/3 flex flex-col items-center justify-center">
          <GiveFeedbackBtn
            title={"¡Dános más feedback!"}
            onClick={this.handleClickFeedback}
          />
        </div>
        <PoweredByFooter/>
      </div>
    )
  }
}

export default withCustomer(ReactionThankyouPage
  );
