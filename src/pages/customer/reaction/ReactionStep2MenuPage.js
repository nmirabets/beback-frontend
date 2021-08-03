import React, { Component } from "react";

import { withCustomer } from "../../../providers/CustomerProvider";
import reactionsTemplate from '../../../reactionsTemplate.json';
import ReactionStep2HeaderBuilder from "../../../components/customer/reaction/ReactionStep2HeaderBuilder";
import BackBtn from "../../../components/BackBtn";
import PoweredByFooter from '../../../components/customer/PoweredByFooter';
import PageHeader from "../../../components/customer/PageHeader";
import PageSubheader from "../../../components/customer/PageSubheader";
import MenuBtn from "../../../components/customer/menu/MenuBtn";

class ReactionStep2MenuPage extends Component {

  handleOnClick = (index) => {
    const { reaction } = this.props.location.state;
    const { menus } = this.props.contextData;
    this.props.history.push({pathname: "/restaurant/reaction-sections", state: { menu: menus[index], reaction }});
  }

  render() {

      const { reaction } = this.props.location.state;
      const feedbackReaction = reactionsTemplate.filter( (element) => element.dimension === reaction.dimension && element.isPositive === reaction.isPositive);
      const { menus } = this.props.contextData;

    return (
      <div className="flex flex-col h-screen" >
        <div className="flex flex-col items-center justify-around mx-auto " >
          <div className="w-screen">
            <BackBtn 
              title="Atrás"
              onClick={this.props.history.goBack}
            />
            <PageHeader 
              name={
                <ReactionStep2HeaderBuilder 
                  dimension={feedbackReaction[0].dimension} isPositive={feedbackReaction[0].isPositive}
                />
              }
              style={"text-2xl"}
            />
            <PageSubheader
              name={"Primero escoge el menú..."}
              style={"text-xl"}
            />
          </div>
          <div className="flex flex-col items-center text-3xl font-normal text-yellow-700 mb-32" >
            <div className="flex flex-col items-center text-3xl font-normal text-yellow-700" >
              {menus.map((menu, index) => {
                return (
                  <MenuBtn 
                    key={index}
                    title={menu.name}
                    onClick={this.handleOnClick}
                    index={index}
                  />
                )
              })}
            </div>
          </div>
          <PoweredByFooter/>
        </div>
      </div>
    )
  }
}

export default withCustomer(ReactionStep2MenuPage);
