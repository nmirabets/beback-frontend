import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withCustomer } from "../../providers/CustomerProvider";
import reactionsTemplate from '../../reactionsTemplate.json';
import SubdimensionHeader from "../../components/customer/reactions/SubdimensionHeader";
import DimensionReactionBtn from '../../components/customer/reactions/ReactionStep1Btn';
import SubdimensionReactionBtn from '../../components/customer/reactions/ReactionStep2Btn';
import FeedbackMenuList from '../../components/customer/reactions/FeedbackMenuList';
import BackBtn from "../../components/BackBtn";
import PoweredByFooter from '../../components/customer/PoweredByFooter';
import apiClient from "../../services/customerApiClient";

class ReactionStartPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      reaction: {},
  };
  }

  handleDimensionClick = (dimension, isPositive ) => {
    this.setState({
      step: 2,
      reaction: { restaurantId: this.state.restaurantId, dimension, isPositive }
    });
  };

  handleSubdimensionClick = ( subdimension ) => {
    const reaction = { ... this.state.reaction, subdimension };
    apiClient.postReaction(reaction);
    this.setState({
      step: 3,
    });
  };

  render() {
      let page = "";
      if (this.state.step === 1) {
      // Feedback page 1 -> Dimension
        page =
        <>
          <BackBtn to={`/${this.state.menuList.restaurant.id}`}  />
          <h1>¿Cómo ha ido?</h1>
          <div>
            {reactionsTemplate.filter( (reaction) => reaction.isPositive === true).map((reaction, index) => {
              return( <DimensionReactionBtn key={index} name={reaction.dimension} onClick={this.handleDimensionClick} /> )
            })}
          </div>
          <PoweredByFooter/>
        </>
    } else if(this.state.step === 2) {
      // Feedback page 2 -> Subdimension
        const feedbackReaction = reactionsTemplate.filter( (reaction) => reaction.dimension === this.state.reaction.dimension && reaction.isPositive === this.state.reaction.isPositive);
        const menuList = this.props.location.state;
        
        if (feedbackReaction[0].dimension==='comida') {
          // Subdimensión = comida
          page =
            <>
              <BackBtn to={`/${this.state.menuList.restaurant.id}`}/>
              <SubdimensionHeader dimension={feedbackReaction[0].dimension} isPositive={feedbackReaction[0].isPositive} />
              <FeedbackMenuList restaurantId={menuList.restaurant.id} data={menuList} onClick={this.handleSubdimensionClick} />
              <PoweredByFooter/>
            </>
        } else {
          // Subdimensión = servicio, ambiente y local
          page =
          <>
            <BackBtn to={`/${this.state.menuList.restaurant.id}`}/>
            <SubdimensionHeader dimension={feedbackReaction[0].dimension} isPositive={feedbackReaction[0].isPositive} />
            <div>
              {feedbackReaction[0].subdimension.map((subdimension, index) => {
                return( <SubdimensionReactionBtn key={index} name={subdimension} onClick={this.handleSubdimensionClick}/> )
              })}
            </div>
            <PoweredByFooter/>
          </>
        }
    } else if(this.state.step === 3) {
      // Feedback page 3 -> Thankyou
      page =
      <>
        <h1>Thank you</h1>
        <Link to={`/${this.state.reaction.restaurantId}`} />
        <PoweredByFooter/>
      </>
    }
    return (
      <>
        {page}
      </>
    )



  }
}

export default withCustomer(ReactionStartPage);
