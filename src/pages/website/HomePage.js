import React, { Component } from "react";

import logo from '../../images/Vapp logo.png'
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import apiClient from '../../services/managerApiClient.js'
import HomeNavBar from "../../components/HomeNavBar";
import RoundedBtn from "../../components/RoundedBtn";
import Spacing from "../../components/Spacing";
import ElBarLoboQR from "../../images/El_Bar_Lobo.png";
import NoTanNegroQR from "../../images/No_Tan_Negro.png";
import TragamarQR from "../../images/Tragamar.png";

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
  }

  render() {

    const { restaurantList, index } = this.state;
    const restaurant = ( restaurantList.length ? restaurantList[index].name : "");
    // Demo QRs
    let QRCode;
    switch (restaurant) {
      case "No Tan Negro":
        QRCode = NoTanNegroQR;
        break;
      case "El Bar Lobo":
        QRCode = ElBarLoboQR;
        break;
      case "Tragamar":
        QRCode = TragamarQR;
        break;
      default:
        QRCode = TragamarQR;
        break;
    }

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
          <h1 className="text-3xl font-thin text-primary-dark" >{restaurant}</h1>
          <div className="flex items-center justify-center">
            <ChevronLeftIcon 
              className="flex bg-secondary-light text-white border rounded-full border-secondary-dark ml-10 w-10" 
              onClick={this.handleClickPrevious}
            />
            <div className="flex flex-col items-center w-1/2" onClick={this.handleClickQR}>
              <img src={QRCode} className="" />
            </div>
            <ChevronRightIcon 
              className="flex bg-secondary-light text-white border rounded-full border-secondary-dark mr-10 w-10" 
              onClick={this.handleClickNext} 
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
