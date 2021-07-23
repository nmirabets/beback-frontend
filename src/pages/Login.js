import React, { Component } from "react";
import { withAuth } from "../providers/AuthProvider";
import Navbar from "../components/Navbar";


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login({
      username, 
      password
    })
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="container mx-auto place-content-center">
        <Navbar />
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="username"
            placeholder="e-mail address"
            value={username}
            onChange={this.handleChange}
          />
           <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={this.handleChange}
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default withAuth(Login);
