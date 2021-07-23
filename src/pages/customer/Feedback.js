import React, { Component } from "react";
import { Link } from "react-router-dom";

import feedbackReactions from '../../../src/feedback.config/feedbackReactions.json';
import DimensionReactionBtn from '../../components/DimensionReactionBtn';
import SubdimensionReactionBtn from '../../components/SubdimensionReactionBtn';
import BackBtn from "../../components/BackBtn";
import PoweredByFooter from '../../components/PoweredByFooter';
import apiClient from "../../services/apiClient";

class Feedback extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      reaction: {},
  };
  }

  componentDidMount() {
    const { restaurantId } = this.props.match.params;
    this.setState({
      restaurantId: restaurantId,
    })
  }

  handleDimensionClick = (dimension, isPositive ) => {
    this.setState({
      step: 2,
      reaction: { restaurantId: this.state.restaurantId, dimension, isPositive }
    })
  };

  handleSubdimensionClick = ( subdimension ) => {
    const reaction = { ... this.state.reaction, subdimension }
    apiClient.postReaction(reaction)
    this.setState({
      step: 3,
    })
  };

  render() {
      let page = "";
      if (this.state.step === 1) {
      // Feedback page 1 -> Dimension
        page =
        <>
          <BackBtn to={`/${this.state.restaurantId}`}  />
          <h1>¿Cómo ha ido?</h1>
          <div>
            {feedbackReactions.filter( (reaction) => reaction.isPositive === true).map((reaction, index) => {
              return( <DimensionReactionBtn key={index} name={reaction.dimension} onClick={this.handleDimensionClick} /> )
            })}
          </div>
          <PoweredByFooter/>
        </>
    } else if(this.state.step === 2) {
      // Feedback page 2 -> Subdimension
        const feedbackReaction = feedbackReactions.filter( (reaction) => reaction.dimension === this.state.reaction.dimension && reaction.isPositive === this.state.reaction.isPositive);
        page =
        <>
          <BackBtn to={`/${this.state.restaurantId}`}/>
          <h1>¿Cómo ha ido?</h1>
          <div>
            {feedbackReaction[0].subdimension.map((subdimension, index) => {
              return( <SubdimensionReactionBtn key={index} name={subdimension} onClick={this.handleSubdimensionClick}/> )
            })}
          </div>
          <PoweredByFooter/>
        </>

    } else if(this.state.step === 3) {
      // Feedback page 3 -> Thankyou
      page =
      <>
        <h1>Thank you</h1>
        <Link to={`/${this.state.restaurantId}`} >Volver</Link>
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

export default Feedback;
