import React, { Component } from "react";

import { withCustomer } from "../../providers/CustomerProvider";
import RestaurantHeader from "../../components/customer/PageHeader";
import PoweredByFooter from "../../components/customer/PoweredByFooter";
import MenuBtn from "../../components/customer/menu/MenuBtn";
import GiveFeedbackBtn from "../../components/customer/menu/GiveFeedbackBtn";

class Landing extends Component {

  componentDidMount() {
    const { restaurantId } = this.props.match.params;
    this.props.loadRestaurant(restaurantId);
  }

  handleClickMenu = (index) => {
    const { menus } = this.props.contextData;
    this.props.history.push({pathname: "/restaurant/menu-sections", state: { menu: menus[index] }});
  }

  handleClickFeedback = () => {
    this.props.history.push("/restaurant/reaction-start");
  }

  render() {

    const { restaurant, menus } = this.props.contextData;

    return (
      <div className="flex flex-col mx-auto items-center h-screen w-screen">
        <div className="h-1/3 flex flex-col items-center justify-center">
          <RestaurantHeader 
          name={restaurant.name}
          style={"text-5xl"}
        />
        </div>
        <div className="h-1/3 w-screen flex flex-col items-center justify-center" >
          {menus.map((menu, index) => {
            return (
              <MenuBtn 
                key={index}
                title={menu.name}
                onClick={this.handleClickMenu}
                index={index}
              />
            )
          })}
        </div>
        <div className="h-1/3 flex items-center text-m font-normal " >
          <GiveFeedbackBtn
            title={"¡Dános feedback!"}
            onClick={this.handleClickFeedback}
          />
        </div>
        <PoweredByFooter/>
      </div>
    );
  }
}

export default withCustomer(Landing);
