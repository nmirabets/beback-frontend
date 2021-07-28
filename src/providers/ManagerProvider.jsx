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


          // const allSections = [];
          // const allItems = [];

          // menus.map( async (menu) => {
          //   const sections =  await apiClient.getSections(menu._id);
          //   sections.map( async (section) => {
          //     allSections.push(section);
          //   })
          //   const items = await apiClient.getItems(menu._id);
          //   items.map( async (item) => {
          //     allItems.push(item);
          //   })
          // })
          
          // this.setState({
          //   restaurants: restaurants,
          //   menus: menus,
          //   sections: allSections,
          //   items: allItems,
          //   activeRestaurantIndex: 0,
          // })
        }
      } catch (e) {
        console.log(e)
      }
    }

  activateRestaurant = ( index ) =>{
    this.setState({ activeRestaurantIndex: index })
  }

  loadRestaurantData = async () => {
    try {
      const restaurants = await apiClient.getUserRestaurants();
      let activeRestaurantIndex = this.state.activeRestaurantIndex;
      let menus = [];
      if (restaurants.length > 0) {

        // por si se ha eliminado el restaurante seleccionado
        if (activeRestaurantIndex>=(restaurants.length)) {
          activeRestaurantIndex=0;
        }
        const activeRestaurant = restaurants[activeRestaurantIndex];
        // load menus, sections and items -> pending
        menus = await apiClient.getMenus(activeRestaurant._id)

        // load dashboard data -> pending

      }
      this.setState({
        restaurants: restaurants,
        menus: menus,
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
      const { menus } = this.state;
      const allSections = [];

      menus.map( async (menu) => {
        const sections =  await apiClient.getSections(menu._id);
        sections.map( async (section) => {
          allSections.push(section);
        })
      })

      this.setState({
        sections: allSections,
      })
    } catch (e) {
      console.log(e)
    }
  }

  loadItemsData = async () => {
    try {
      const { menus } = this.state;
      const allItems = [];

      menus.map( async (menu) => {
        const items =  await apiClient.getItems(menu._id);
        items.map( async (item) => {
          allItems.push(item);
        })
      })

      this.setState({
        items: allItems,
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
          }}>
        {this.props.children}
      </Provider>
    )
  }
}

export default ManagerProvider;
