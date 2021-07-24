import React, { Component } from "react";
import { withAuth } from "../../providers/AuthProvider";
// import { Link } from "react-router-dom";

import BotNavBar from "../../components/manager/BotNavBar";
import PoweredByFooter from "../../components/PoweredByFooter";

class SetMenu extends Component {
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

  render() {
    // const { menu } = this.state;
    return (
      <div className="container mx-auto flex-row">
        <h1 className="text-xl" >Set Menu</h1>

        <PoweredByFooter />
        <BotNavBar />
      </div>
    );
  }
}

export default withAuth(SetMenu);
