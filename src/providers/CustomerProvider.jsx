import React, { Component } from "react";
import apiClient from "../services/customerApiClient";

const { Consumer, Provider } = React.createContext();

export const withCustomer = (Comp) => {
  return class WithCustomer extends Component {
    render() {
      return (
        <Consumer>
          {customerProvider => (
            <Comp
              contextData={customerProvider.contextData}
              loadRestaurant={customerProvider.loadRestaurant}
              {...this.props}
            />
          )}
        </Consumer>
      )
    }
  }
} 

class CustomerProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurant: {},
      menus: [],
      sections: [], 
      items: [],
      reaction: {},
    }
  }

  loadRestaurant = async (restaurantId) => {
    try {
      const restaurant = await apiClient.getRestaurant(restaurantId);
      const menus = await apiClient.getActiveMenus(restaurantId);
      const sections = await apiClient.getSections(restaurantId);
      const items =  await apiClient.getItems(restaurantId);

      this.setState({ restaurant, menus, sections, items, reaction: {} })
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const  { restaurant, menus, sections, items, reaction }  = this.state;
     
    return (
      <Provider value={{ 
          contextData: { restaurant, menus, sections, items, reaction },
          loadRestaurant: this.loadRestaurant,
          }}>
        {this.props.children}
      </Provider>
    )
  }
}

export default CustomerProvider;