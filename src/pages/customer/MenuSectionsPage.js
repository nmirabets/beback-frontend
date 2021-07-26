import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withCustomer } from "../../providers/CustomerProvider";
import PoweredByFooter from "../../components/customer/PoweredByFooter";

class MenuSectionsPage extends Component {

  render() {

    const { name } = this.props.contextData.restaurant;

    return (
      <>
        <h1>{name} Menu sections</h1>
        <Link to={{ pathname: `/restaurant/menu-items`}} >Ver la carta</Link>
        <PoweredByFooter/>
      </>
    );
  }
}

export default withCustomer(MenuSectionsPage);
