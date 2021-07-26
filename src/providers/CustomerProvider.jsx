import React, { Component } from "react";
import apiClient from "../services/apiClient";

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
              createReaction={customerProvider.createReaction}
              sendReaction={customerProvider.sendReaction}
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
      const sections = await apiClient.getSections(restaurant.activeMenuId);
      const items =  await apiClient.getItems(restaurant.activeMenuId);

      this.setState({ restaurant, menu, sections, items, reaction: {} })

    } catch (e) {
      console.log(e);
    }
  }

  createReaction = ( name, isPositive ) => {
    const { restaurant } = this.state;
    this.setState({
      reaction: { restaurantId: restaurant._id , name, isPositive }
    });
  }

  sendReaction = ( name, isPositive ) => {
    const { startedReaction } = this.state;
    const reaction = { ...startedReaction, name, isPositive}; 

    apiClient.postReaction(reaction);  
  }

  render() {
    const  { restaurant, menu, sections, items, reaction }  = this.state;
     
    return (
      <Provider value={{ 
          contextData: { restaurant, menu, sections, items, reaction },
          loadRestaurant: this.loadRestaurant,
          createReaction: this.createReaction,
          sendReaction: this.sendReaction,
          }}>
        {this.props.children}
      </Provider>
    )
  }
}

export default CustomerProvider;