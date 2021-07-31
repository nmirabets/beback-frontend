import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withCustomer } from "../../providers/CustomerProvider";
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
      
    return (
      <>
        <h1>Thank you</h1>
        <Link to={`/${this.state.reaction.restaurantId}`} />
        <PoweredByFooter/>
      </>
    )



  }
}

export default withCustomer(ReactionStartPage);
