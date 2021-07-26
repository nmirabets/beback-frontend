import React, { Component } from "react";
// import { Link } from "react-router-dom";

import { withCustomer } from "../../providers/CustomerProvider";
import feedbackReactions from '../../feedback.config/feedbackReactions.json';
import SubdimensionHeader from "../../components/customer/reactions/SubdimensionHeader";
import SubdimensionReactionBtn from '../../components/customer/reactions/ReactionStep2Btn';
import BackBtn from "../../components/customer/BackBtn";
import PoweredByFooter from '../../components/customer/PoweredByFooter';

class ReactionStep2Page extends Component {

  handleSubdimensionClick = ( name ) => {
    this.props.sendReaction(name);
  };

  render() {

      // Feedback page 2 -> Subdimension
        const feedbackReaction = feedbackReactions.filter( (reaction) => reaction.dimension === this.state.reaction.dimension && reaction.isPositive === this.props.reaction.isPositive);

    return (
      <>
        <BackBtn to={'/reaction-rest'}/>
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
