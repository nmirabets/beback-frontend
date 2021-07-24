import React, { Component } from "react";
import { Link } from "react-router-dom";
import apiClient from "../../services/apiClient";

import RestaurantHeader from "../../components/customer/RestaurantHeader";
import PoweredByFooter from "../../components/PoweredByFooter";

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

   async componentDidMount() {
      const { restaurantId } = this.props.match.params;
      const restaurant = await apiClient.findRestaurantActiveMenu(restaurantId);
      const sections = await apiClient.getMenuSections(restaurant.activeMenu._id);
      const items =  await apiClient.getMenuItems(restaurant.activeMenu._id);

      this.setState({
        restaurant: restaurant,
        menu: restaurant.activeMenu,
        sections: sections,
        items: items,
      })
  }

  render() {
    console.log("rendered")
    const { restaurant, menu, sections, items } = this.state;
    return (
      <div className="container mx-auto flex-row">
        <RestaurantHeader name={restaurant.name} />
        <Link to={{ pathname: `/${restaurant.id}/menu`, state: { restaurant, menu, sections, items }}} >Ver la carta</Link>
        <Link to={{ pathname: `/${restaurant.id}/feedback`, state: { restaurant, menu, sections, items }}} > ¡Dános feedback!</Link>
        <PoweredByFooter/>
      </div>
    );
  }
}

export default Landing;
