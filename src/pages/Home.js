import React, { Component } from "react";
import { Link } from "react-router-dom";
import apiClient from '../services/apiClient.js'
import { withAuth } from "../providers/AuthProvider";
import Navbar from '../components/Navbar';

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

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   const { username, password } = this.state;
  //   this.props.signup({ username, password });
  // };

  // handleChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({ [name]: value });
  // };

  render() {
    const { restaurantList } = this.state;
    return (
      <>
        <h1 className="text-4xl">Welcome to BeBack</h1>
        <Navbar />
        <ul> 
          { restaurantList.map((restaurant, index) => {
            return(
              <li key={index}>
                <Link  to={`/${restaurant._id}`} >{restaurant.name}</Link>
              </li>
            )
          })}
        </ul>
      </>
    );
  }
}

export default withAuth(Home);
