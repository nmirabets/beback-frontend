import React, { Component } from "react";
import apiClient from "../../services/apiClient";
import { withAuth } from "../../providers/AuthProvider";
// import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: {},
  };
  }

  componentDidMount() {
    const { restaurantId } = this.props.match.params;
    apiClient.findActiveMenu(restaurantId).then((res) => {
      console.log(res);
      this.setState({ })
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
    // const { menu } = this.state;
    return (
      <div className="container mx-auto flex-row">
        <h1 className="text-xl" >Dashboard</h1>
        <p></p>
        <footer className="text-xs" >powered by BeBack</footer>
      </div>
    );
  }
}

export default withAuth(Dashboard);
