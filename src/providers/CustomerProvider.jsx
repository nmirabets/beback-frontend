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
      menu: {},
      sections: [], 
      items: [],
      reaction: {},
    }
  }

  loadRestaurant = async ( restaurant ) => {
    try {
      const menu = await apiClient.getMenu(restaurant.activeMenuId);
      const sections = await apiClient.getSections(restaurant._id);
      const items =  await apiClient.getItems(restaurant._id);

      this.setState({ restaurant, menu, sections, items, reaction: {} })
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const  { restaurant, menu, sections, items, reaction }  = this.state;
     
    return (
      <Provider value={{ 
          contextData: { restaurant, menu, sections, items, reaction },
          loadRestaurant: this.loadRestaurant,
          }}>
        {this.props.children}
      </Provider>
    )
  }
}

export default CustomerProvider;