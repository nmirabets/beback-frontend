import React, { Component } from "react";

import logo from '../../images/Vapp logo.png'
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import apiClient from '../../services/managerApiClient.js'
import HomeNavBar from "../../components/HomeNavBar";
import RoundedBtn from "../../components/RoundedBtn";
import Spacing from "../../components/Spacing";
import sampleQR from "../../images/Demo QR.png"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurantList: [{}],
      index: 0,
    };
  }

  componentDidMount() {
    apiClient.findAllRestaurants().then((res) => {
      this.setState({ 
        restaurantList: res,
        index: 0,
      })
    });
  }

  handleClickRight = () => {
    this.props.history.push("/login");
  }

  handleClickLeft = () => {
    this.props.history.push("/");
  }

  handleClickNext = () => {
    const { restaurantList, index } = this.state;
    if (index===(restaurantList.length - 1)) {
      this.setState({
        index: 0,
      })
    } else {
      this.setState({
        index: (index + 1),
      })
    }
  }

  handleClickPrevious = () => {
    const { restaurantList, index } = this.state;
    if (index===0) {
      this.setState({
        index: (restaurantList.length - 1)
      })
    } else {
      this.setState({
        index: (index - 1)
      })
    }
  }

  handleClickQR = () => {
    const { restaurantList, index } = this.state;
    const restaurant = restaurantList[index];
    this.props.history.push({pathname: `/restaurant/${restaurant._id}`});
    // this.props.history.push({pathname: "/restaurant", state: { restaurant }});
  }

  render() {
    const { restaurantList, index } = this.state;
    const restaurant = ( restaurantList.length ? restaurantList[index].name : "");

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
        <div className="flex flex-col w-full pt-20 items-center">
          <div className="flex items-center">
            <ChevronLeftIcon 
              className="flex bg-secondary-light text-white border rounded-full border-secondary-dark ml-5" 
              onClick={this.handleClickPrevious}
            />            
            <div className="flex flex-col items-center" onClick={this.handleClickQR}>
              <h1 className="text-3xl font-thin text-primary-dark" >{restaurant}</h1>
              <img src={sampleQR} className="w-3/4" />
            </div>
            <ChevronRightIcon 
              className="flex bg-secondary-light text-white border rounded-full border-secondary-dark mr-5 " 
              onClick={this.handleClickNext} 
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
