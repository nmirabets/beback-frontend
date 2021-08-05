import React, { Component } from "react";

import { withAuth } from "../../../providers/AuthProvider";
import Spacing from "../../../components/Spacing";
import HomeNavBar from "../../../components/HomeNavBar";
import RoundedBtn from "../../../components/RoundedBtn";
import logo from "../../../images/Vapp logo.png";


class SignupPage extends Component {
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

  handleClickRight = () => {
    this.props.history.push("/login");
  }

  handleClickLeft = () => {
    this.props.history.push("/");
  }

  handleLoginClick = () => {
    this.props.history.push("/login");
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
              className="text-base py-2 my-2 bg-primary-light bg-opacity-50"
              type="text"
              name="username"
              placeholder="e-mail address"
              value={username}
              onChange={this.handleChange}
            />
            <input
              className="text-base py-2 my-2 bg-primary-light bg-opacity-50"
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={this.handleChange}
            />
            <button className="flex  text-lg font-light text-white border border-secondary-dark rounded-full bg-secondary-light bg-opacity-70 px-6 my-1" onClick={this.handleFormSubmit} type="submit" value="Signup" >Signup</button>
            <h2 className="text-sm font-thin mt-2" >¿Ya tienes una cuenta?</h2>
            <button className="flex text-lg font-thin text-secondary-dark rounded-full px-6 py-1" onClick={this.handleLoginClick} type="submit" value="Signup" >Login</button>
          </form>
        </div>
      </div>
      
    );
  }
}

export default withAuth(SignupPage);

/* <>
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
      </> */