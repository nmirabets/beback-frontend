import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withCustomer } from "../../providers/CustomerProvider";
import RestaurantHeader from "../../components/customer/RestaurantHeader";
import PoweredByFooter from "../../components/customer/PoweredByFooter";

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurant: {},
			menu: {},
			sections: [],
			items: [],
  };
  }

  componentDidMount() {
    const { restaurant } = this.props.location.state;
    this.props.loadRestaurant( restaurant );
  }

  render() {

    const { name } = this.props.contextData.restaurant;

    return (
      <div className="container mx-auto flex-row">
        <RestaurantHeader name={name} />
        <Link to={{ pathname: `/restaurant/menu-sections` }} >Ver la carta</Link>
        <Link to={{ pathname: `/restaurant/reaction-start` }} > ¡Dános feedback!</Link>
        <PoweredByFooter/>
      </div>
    );
  }
}

export default withCustomer(Landing);
