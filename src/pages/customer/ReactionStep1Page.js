import React, { Component } from "react";

import { withCustomer } from "../../providers/CustomerProvider";
import reactionsTemplate from '../../reactionsTemplate.json';
import ReactionStep1Btn from '../../components/customer/reactions/ReactionStep1Btn';
import PoweredByFooter from '../../components/customer/PoweredByFooter';
import BackBtn from "../../components/BackBtn";

class ReactionStep1Page extends Component {

  handleClick = (name, isPositive ) => {
    this.props.createReaction(name, isPositive );
  };

  render() {
    return (
      <>
        <BackBtn title="Atrás" onClick={this.props.history.goBack} />
        <h1 className="text-xl ">¡Dános tu opinión!</h1>
        <h2 className="text-m ">Selecciona una opción...</h2>
        <div>
          {reactionsTemplate.filter( (reaction) => reaction.isPositive === true).map((reaction, index) => {
            return( <ReactionStep1Btn key={index} name={reaction.dimension} onClick={this.handleClick} /> )
          })}
        </div>
        <PoweredByFooter/>
      </>
    )
  }
}

export default withCustomer(ReactionStep1Page);
