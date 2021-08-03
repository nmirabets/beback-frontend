import React, { Component } from "react";
import managerApiClient from "../services/managerApiClient";

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
              loadDashboardData={managerProvider.loadDashboardData}
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
      dashboardData: {
        dataSummary: {},
        rankData: {},
      },
    }
  }

  async componentDidMount() {
    try {
      await this.loadRestaurantData();
      const { restaurants } = this.state;
      if (restaurants.length > 0) {
        await this.loadMenusData(restaurants[0]._id)
        await this.loadSectionsData(restaurants[0]._id);
        await this.loadItemsData(restaurants[0]._id);
        await this.loadDashboardData(restaurants[0]._id);
      }
    } catch (e) {
      console.log(e)
    }
  }

  activateRestaurant = async (index) =>{
    const { restaurants } = this.state;

    await this.loadMenusData(restaurants[index]._id)
    await this.loadSectionsData(restaurants[index]._id);
    await this.loadItemsData(restaurants[index]._id);
    await this.loadDashboardData(restaurants[index]._id);

    this.setState({ activeRestaurantIndex: index })
  }

  loadRestaurantData = async () => {
    try {
      const restaurants = await managerApiClient.getUserRestaurants();
      let activeRestaurantIndex = this.state.activeRestaurantIndex;

      if (restaurants.length > 0 && activeRestaurantIndex >= restaurants.length) {
        activeRestaurantIndex=0;
      }
      this.setState({
        restaurants,
        activeRestaurantIndex,
      })
    } catch (e) {
      console.log(e)
    }
  }

  loadMenusData = async (restaurantId) => {
    try {
    const menus = await managerApiClient.getMenus(restaurantId);
    this.setState({
        menus: menus,
      })
    } catch (e) {
      console.log(e)
    }
  }

  loadSectionsData = async (restaurantId) => {
    try {
      const sections = await managerApiClient.getSections(restaurantId);
      this.setState({
        sections,
      })
    } catch (e) {
      console.log(e)
    }
  }

  loadItemsData = async (restaurantId) => {
    try {
      const items = await managerApiClient.getItems(restaurantId);
      this.setState({
        items,
      })
    } catch (e) {
      console.log(e)
    }
  }

  loadDashboardData = async (restaurantId) => {
    try {
      const dashboardData = await managerApiClient.getDashboardData(restaurantId);
      this.setState({
        dashboardData,
      });
    } catch (e) {
      console.log(e)
    }
  }

  render() {

    const  { dashboardData, restaurants, menus, sections, items, activeRestaurantIndex }  = this.state;

    return (
      <Provider value={{ 
          contextData: { dashboardData, restaurants, menus, sections, items, activeRestaurantIndex },
          activateRestaurant: this.activateRestaurant,
          loadRestaurantData: this.loadRestaurantData,
          loadMenusData: this.loadMenusData,
          loadSectionsData: this.loadSectionsData,
          loadItemsData: this.loadItemsData,
          loadDashboardData: this.loadDashboardData,
          }}>
        {this.props.children}
      </Provider>
    )
  }
}

export default ManagerProvider;
