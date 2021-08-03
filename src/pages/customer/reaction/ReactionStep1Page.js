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
      <div className="flex flex-col h-screen" >
        <div className="flex flex-col items-center mx-auto h-full" >
        <div className="w-screen">
          <BackBtn 
            title="Atrás"
            onClick={this.props.history.goBack}
          />
          <PageHeader 
            name={"¿Qué quieres evaluar?"}
            style={"text-3xl"}
          />
          <PageSubheader
            name={"Selecciona una opción..."}
            style={"text-xl"}
          />
        </div>
          <div className="flex flex-col items-center text-3xl font-normal mb-32 justify-around" >
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
      </div>
    )
  }
}

export default withCustomer(ReactionStep1Page);
