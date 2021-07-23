import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {

  };
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
    // const { username, password } = this.state;
    // const { countryId } = this.props.match.params
    const { restaurantId } = this.props.match.params;
    return (
      <div className="container mx-auto flex-row">
        <h1 className="text-xl" >Restaurant Name</h1>
        <Link to={`/${restaurantId}/menu`} >Ver la carta</Link>
        <Link to={`/${restaurantId}/feedback`} > ¡Dános feedback!</Link>
        <footer className="text-xs" >powered by BeBack</footer>
      </div>
    );
  }
}

export default Landing;
