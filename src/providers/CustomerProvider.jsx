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

  async componentDidMount() {
    // console.log("HEY")
    // try {
    //   await this.loadRestaurantData();
    //   const { restaurants } = this.state;
    //   if (restaurants.length > 0) {
    //     await this.loadMenusData(restaurants[0]._id);
    //     await this.loadSectionsData();
    //     await this.loadItemsData();
    //   }
    // } catch (e) {
    //   console.log(e)
    // }
  }

  loadRestaurant = async ( restaurant ) => {
    try {
      console.log("load restaurant", restaurant)
      const menu = await apiClient.getMenu(restaurant.activeMenuId);
      const sections = await apiClient.getSections(restaurant._id);
      const items =  await apiClient.getItems(restaurant._id);

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