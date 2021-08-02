import React, { Component } from "react";

import { withCustomer } from "../../../providers/CustomerProvider";
import reactionsTemplate from '../../../reactionsTemplate.json';
import SubdimensionHeader from "../../../components/customer/reactions/SubdimensionHeader";
import SubdimensionReactionBtn from '../../../components/customer/reactions/ReactionStep2Btn';
import BackBtn from "../../../components/BackBtn";
import PoweredByFooter from '../../../components/customer/PoweredByFooter';
import apiClient from "../../../services/customerApiClient";

class ReactionStep2Page extends Component {

  handleSubdimensionClick = ( subdimension ) => {
    const { reaction: wipReaction } = this.props.location.state;
    const reaction = { ...wipReaction, subdimension}; 

    apiClient.newReaction(reaction);  
  };

  render() {
      const { reaction } = this.props.location.state;
      const feedbackReaction = reactionsTemplate.filter( (element) => element.dimension === reaction.dimension && element.isPositive === reaction.isPositive);

    return (
      <>
        <BackBtn title="Atrás" onClick={this.props.history.goBack} />
        <SubdimensionHeader dimension={feedbackReaction[0].dimension} isPositive={feedbackReaction[0].isPositive} />
        <div>
          {feedbackReaction[0].subdimension.map((subdimension, index) => {
            return( <SubdimensionReactionBtn key={index} name={subdimension} onClick={this.handleSubdimensionClick}/> )
          })}
        </div>
        <PoweredByFooter/>
      </>
    )



  }
}

export default withCustomer(ReactionStep2Page);
