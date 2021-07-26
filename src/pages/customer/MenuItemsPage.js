import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withCustomer } from "../../providers/CustomerProvider";
import PoweredByFooter from "../../components/customer/PoweredByFooter";

class MenuItemsPage extends Component {

  render() {
    const { menu, sections, items } = this.props.contextData;
    return (
      <div>
        <Link to={{ pathname: `/restaurant/menu-sections` }} > ¡Dános feedback!</Link>
        <div>
					<h1>{menu.name}</h1>
          {sections.map((section, index) => {
            return(
              <div key={index} >
                <h2>{section.name}</h2>
                <div>
                  {items.map((item, index) => {
                    return(
                      <div key={index} >
                        {item.name}
                      </div>
                    )
                  })}
                </div>
              </div>
              )
            })}
        </div>
        <PoweredByFooter />
      </div>
    )
  }
}

export default withCustomer(MenuItemsPage);
