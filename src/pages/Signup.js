import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../providers/AuthProvider";
import Navbar from "../components/Navbar";

class Signup extends Component {
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
    this.props.signup({ username, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <>
        <Navbar />
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <input type="submit" value="Signup" />
        </form>
        <p>
          Already have account?
          <Link to={"/login"}> Login</Link>
        </p>
      </>
    );
  }
}

export default withAuth(Signup);
