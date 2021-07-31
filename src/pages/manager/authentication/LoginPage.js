import React, { Component } from "react";

import { withAuth } from "../../../providers/AuthProvider";
import Spacing from "../../../components/Spacing";
import HomeNavBar from "../../../components/HomeNavBar";
import RoundedBtn from "../../../components/RoundedBtn";
import logo from "../../../images/v-logo.svg";

class LoginPage extends Component {
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

  handleClickRight = () => {
    this.props.history.push("/login");
  }

  handleClickLeft = () => {
    this.props.history.push("/");
  }

  handleSignupClick = () => {
    this.props.history.push("/signup");
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="container mx-auto place-content-center">
        <HomeNavBar 
          logo = {logo}
          RightComponent={RoundedBtn}
					rightTitle='Entrar'
					onClickRight={this.handleClickRight}
					LeftComponent={RoundedBtn} 
					leftTitle='QRs'
					onClickLeft={this.handleClickLeft}
        />
        <Spacing/>
        <div className="w-full pt-20 items-center">
          <form className="flex flex-col items-center " onSubmit={this.handleFormSubmit}>
            <input
              className="text-2xl py-2 my-2 bg-gray-200"
              type="text"
              name="username"
              placeholder="e-mail address"
              value={username}
              onChange={this.handleChange}
            />
            <input
              className="text-2xl py-2 my-2 bg-gray-200"
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={this.handleChange}
            />
            <button className="flex bg-yellow-400 text-2xl font-light text-white border rounded-full border-yellow-500 px-6 py-1 my-2" onClick={this.handleFormSubmit} type="submit" value="Login" >Login</button>
            <h2 className="text-l font-thin mt-2" >¿Aún no tienes cuenta?</h2>
            <button className="flex text-2xl font-thin text-yellow-700 rounded-full border-yellow-500 px-6 py-1" onClick={this.handleSignupClick} type="submit" value="Signup" >Signup</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withAuth(LoginPage);
