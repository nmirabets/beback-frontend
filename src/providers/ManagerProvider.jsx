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
              loadMenusData={managerProvider.loadMenusData}
              loadSectionsData={managerProvider.loadSectionsData}
              loadItemsData={managerProvider.loadItemsData}
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
      activeRestaurantIndex: 0,
      restaurants: [],
      menus: [],
      sections: [],
      items: [],
      dashboardData: {},
    }
  }

  async componentDidMount() {
    try {
        await this.loadRestaurantData();

        const { restaurants } = this.state;

        if (restaurants.length > 0) {
          await this.loadMenusData(restaurants[0]._id)
          await this.loadSectionsData();
          await this.loadItemsData();
        }
      } catch (e) {
        console.log(e)
      }
    }

  activateRestaurant = async (index) =>{
    const { restaurants } = this.state;

    await this.loadMenusData(restaurants[index]._id)
    await this.loadSectionsData();
    await this.loadItemsData();

    this.setState({ activeRestaurantIndex: index })
  }

  loadRestaurantData = async () => {
    try {
      const restaurants = await apiClient.getUserRestaurants();
      let activeRestaurantIndex = this.state.activeRestaurantIndex;

      if (restaurants.length > 0 && activeRestaurantIndex>=(restaurants.length)) {
        activeRestaurantIndex=0;
      }
      this.setState({
        restaurants: restaurants,
        activeRestaurantIndex
      })
    } catch (e) {
      console.log(e)
    }
  }

  loadMenusData = async (restaurantId) => {
    try {
    const menus = await apiClient.getMenus(restaurantId);
    this.setState({
        menus: menus,
      })
    } catch (e) {
      console.log(e)
    }
  }

  loadSectionsData = async () => {
    try {
      const { activeRestaurantIndex, restaurants } = this.state;
      const sections = await apiClient.getSections(restaurants[activeRestaurantIndex]._id);
      this.setState({
        sections,
      })
    } catch (e) {
      console.log(e)
    }
  }

  loadItemsData = async () => {
        try {
      const { activeRestaurantIndex, restaurants } = this.state;
      const items = await apiClient.getItems(restaurants[activeRestaurantIndex]._id);
      this.setState({
        items,
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {

    const  { restaurants, menus, sections, items, activeRestaurantIndex }  = this.state;

    return (
      <Provider value={{ 
          contextData: { restaurants, menus, sections, items, activeRestaurantIndex },
          activateRestaurant: this.activateRestaurant,
          loadRestaurantData: this.loadRestaurantData,
          loadMenusData: this.loadMenusData,
          loadSectionsData: this.loadSectionsData,
          loadItemsData: this.loadItemsData,
          }}>
        {this.props.children}
      </Provider>
    )
  }
}

export default ManagerProvider;
