import React, { Component } from "react";
import { Link } from "react-router-dom";

import apiClient from '../services/apiClient.js'
import Navbar from '../components/home/Navbar';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurantList: [],
  };
  }

  componentDidMount() {
    apiClient.findAllRestaurants().then((res) => {
      this.setState({ restaurantList: res })
    });
  }

  render() {
    const { restaurantList } = this.state;
    return (
      <>
        <h1 className="text-4xl">Welcome to BeBack</h1>
        <Navbar/>
        <ul> 
          { restaurantList.map((restaurant, index) => {
            return(
              <li key={index}>
                <Link to={{ pathname: '/restaurant', state: { restaurant }}} >{restaurant.name}</Link>
              </li>
            )
          })}
        </ul>
      </>
    );
  }
}

export default Home;
