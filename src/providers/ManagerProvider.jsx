import React, { Component } from "react";
import apiClient from "../services/apiClient";

const { Consumer, Provider } = React.createContext();

export const withManager = (Comp) => {
  return class WithManager extends Component {
    render() {
      return (
        <Consumer>
          {managerProvider => (
            <Comp
              contextData={managerProvider.contextData}
              activateRestaurant={managerProvider.activateRestaurant}
              loadRestaurantData={managerProvider.loadRestaurantData}
              {...this.props}
            />
          )}
        </Consumer>
      )
    }
  }
} 

class ManagerProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [],
      activeRestaurantIndex: "",
      menus: [],
      dashboardData: {},
    }
  }

  async componentDidMount() {
    try {
      // load user's restaurants
      const restaurants = await apiClient.getUserRestaurants();
      if (typeof restaurants !== 'undefined' && restaurants.length > 0) {
        // load menus, sections and items

        const menus = await apiClient.getMenus(restaurants[0]._id);

        // load dashboard data

          this.setState({
            restaurants: restaurants,
            menus: menus,
            activeRestaurantIndex: 0,
          })
      }
    } catch (e) {
      console.log(e)
    }
  }

  activateRestaurant = ( activeRestaurantIndex ) =>{
    this.setState({ activeRestaurantIndex: activeRestaurantIndex })
  }

  loadRestaurantData = async () => {
     try {
      // load user's restaurants
      const restaurants = await apiClient.getUserRestaurants();
      if (typeof restaurants !== 'undefined' && restaurants.length > 0) {
        const activeRestaurantIndex = this.state.activeRestaurantIndex;
        const activeRestaurant = restaurants[activeRestaurantIndex];
        // load menus, sections and items
        const menus = await apiClient.getMenus(activeRestaurant._id)
        // load dashboard data -> pending

          this.setState({
            restaurants: restaurants,
            menus: menus,
          })
      }
    } catch (e) {
      console.log(e)
    }
  }

  render() {

    const  { restaurants, menus, activeRestaurantIndex }  = this.state;
     
    return (
      <Provider value={{ 
          contextData: { restaurants, menus, activeRestaurantIndex },
          activateRestaurant: this.activateRestaurant,
          loadRestaurantData: this.loadRestaurantData,
          }}>
        {this.props.children}
      </Provider>
    )
  }
}

export default ManagerProvider;
