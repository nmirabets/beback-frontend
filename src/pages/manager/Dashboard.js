import React, { Component } from "react";
import PoweredByFooter from "../../components/PoweredByFooter";
import BotNavBar from "../../components/manager/BotNavBar";
import { withAuth } from "../../providers/AuthProvider";
// import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: {},
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
    // const { menu } = this.state;
    return (
      <div className="container min-h-screen bg-gray-900 mx-auto flex-row">
        <h1 className="text-xl" >Dashboard</h1>
        
        <PoweredByFooter />
        <BotNavBar />
      </div>
    );
  }
}

export default withAuth(Dashboard);
