import React, { Component } from "react";

import { withCustomer } from "../../providers/CustomerProvider";
import RestaurantHeader from "../../components/customer/PageHeader";
import PoweredByFooter from "../../components/customer/PoweredByFooter";
import { ThumbUpIcon, ThumbDownIcon }from "@heroicons/react/outline";

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurant: {},
    };
  }

  componentDidMount() {
    const { restaurant } = this.props.location.state;
    this.props.loadRestaurant( restaurant );
    this.setState({
      restaurant,
    });
  }

  handleClickMenu = () => {
    this.props.history.push("/restaurant/menu-sections");
  }

  handleClickFeedback = () => {
    this.props.history.push("/restaurant/reaction-start");
  }

  render() {

    const { name } = this.props.contextData.restaurant;

    return (
      <div className="container min-h-screen mx-auto flex flex-col bg-gray-200 ">
        <RestaurantHeader name={name} />
        <button className="flex m-2 border rounded-full border-yellow-500 px-1 py-1" onClick={this.handleClickMenu} >
          <h2 className="text-3xl font-light text-yellow-700 mx-2 ">Ver la carta</h2>
        </button>	
        <button className="flex m-2 border rounded-full border-yellow-500 px-1 py-1" onClick={this.handleClickFeedback} >
          <div className="flex items-center text-l font-thin text-yellow-700 mx-2 ">
            <ThumbDownIcon className="text-red-800 w-5 h-5 mx-1" onClick={this.handleClickPos} />
					  <h1>¡Dános feedback!</h1>
					  <ThumbUpIcon className="text-green-800 w-5 h-5 mx-1" onClick={this.handleClickNeg} />
          </div>
        </button>	
        <PoweredByFooter/>
      </div>
    );
  }
}

export default withCustomer(Landing);
