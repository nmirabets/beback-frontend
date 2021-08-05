import React, { Component } from "react";

import { withCustomer } from "../../../providers/CustomerProvider";
import reactionsTemplate from '../../../reactionsTemplate.json';
import ReactionStep1Btn from '../../../components/customer/reaction/ReactionStep1Btn';
import PoweredByFooter from '../../../components/customer/PoweredByFooter';
import BackBtn from "../../../components/BackBtn";
import PageHeader from "../../../components/customer/PageHeader";
import PageSubheader from "../../../components/customer/PageSubheader";

class ReactionStep1Page extends Component {

  handleOnClick = (dimension, isPositive ) => {
    const { restaurant } = this.props.contextData;
    const reaction = { restaurantId: restaurant._id , dimension, isPositive };
    
    if (dimension==="comida") {
      this.props.history.push({pathname: "/restaurant/reaction-menu", state: { reaction }});
    } else {
      this.props.history.push({pathname: "/restaurant/reaction-rest", state: { reaction }});
    }
  };

  render() {


    return (
      <>
        <div className="h-screen w-screen mx-auto" >
            <div className="m-2">
              <BackBtn
                onClick={this.props.history.goBack}
              />
            </div>
            <div className="h-1/3 flex flex-col items-center justify-center">
            <PageHeader 
              name={"¿Qué quieres evaluar?"}
              style={"text-2xl py-2"}
            />
            <PageSubheader
              name={"Selecciona una opción..."}
            />
          </div>
          <div className="flex flex-col items-center " >
              {reactionsTemplate.filter( (reaction) => reaction.isPositive === true).map((reaction, index) => {
                return( 
                  <ReactionStep1Btn 
                    key={index}
                    name={reaction.dimension}
                    onClick={this.handleOnClick}
                  /> )
              })}
          </div>
          <PoweredByFooter/>
        </div>
      </>
    )
  }
}

export default withCustomer(ReactionStep1Page);
