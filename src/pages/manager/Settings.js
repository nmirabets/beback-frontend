import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { withAuth } from "../../providers/AuthProvider";

import BotNavBar from "../../components/manager/BotNavBar";
import PoweredByFooter from "../../components/PoweredByFooter";

class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: {},
  };
  }

  componentDidMount() {

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

  logout= () => {
    this.props.logout();
  }

  render() {
    // const { menu } = this.state;
    return (
      <div className="container mx-auto flex-row">
        <h1 className="text-xl" >Settings</h1>
        <button onClick={this.logout}>Logout</button>
        <PoweredByFooter />
        <BotNavBar />
      </div>
    );
  }
}

export default withAuth(Settings);
