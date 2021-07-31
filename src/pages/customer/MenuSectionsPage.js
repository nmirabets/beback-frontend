import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withCustomer } from "../../providers/CustomerProvider";
import PoweredByFooter from "../../components/customer/PoweredByFooter";
import RestaurantHeader from "../../components/customer/RestaurantHeader";

class MenuSectionsPage extends Component {

  render() {

    const { restaurant, sections } = this.props.contextData;

    return (
      <>
        <RestaurantHeader name={restaurant.name} />
        <ul> 
            { sections.map((section, index) => {
              return(
                <li key={index}>
                  <Link to={{ pathname: '/restaurant/menu-items', state: { section }}} >{section.name}</Link>
                </li>
              )
            })}
        </ul>
        <PoweredByFooter/>
      </>
    );
  }
}

export default withCustomer(MenuSectionsPage);
