import React, { Component } from "react";

import logo from '../../images/v-logo.svg'
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import apiClient from '../../services/managerApiClient.js'
import HomeNavBar from "../../components/HomeNavBar";
import RoundedBtn from "../../components/RoundedBtn";
import Spacing from "../../components/Spacing";
import sampleQR from "../../images/sampleQR.png"
// logo background color: #ded8c2, #c8c7c4, #dbdbdb
// logo color: 

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
    if (index===restaurantList.length - 1) {
          this.setState({
      index: 0
    })
    } else {
          this.setState({
      index: index + 1
    })
    }
  }

  handleClickPrevious = () => {
    const { restaurantList, index } = this.state;
    if (index===0) {
      this.setState({
        index: restaurantList.length - 1
      })
    } else {
      this.setState({
        index: index - 1
      })
    }
  }

  handleClickQR = () => {
    const { restaurantList, index } = this.state;
    const restaurant = restaurantList[index];
    this.props.history.push({pathname: "/restaurant", state: { restaurant }});
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
            <ChevronLeftIcon className="flex bg-yellow-400 w-32 text-white border rounded-full border-yellow-500 ml-5" onClick={this.handleClickPrevious}  ></ChevronLeftIcon>            
            <div className="flex flex-col items-center" onClick={this.handleClickQR}>
              <h2 className="" >{restaurant}</h2>
              <img src={sampleQR} className="transform scale-75" />
            </div>
            <ChevronRightIcon className="flex bg-yellow-400 w-32 text-white border rounded-full border-yellow-500 mr-5 " onClick={this.handleClickPrevious} ></ChevronRightIcon>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
