import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import { withAuth } from "../../../providers/AuthProvider";
import BotNavBar from '../BotNavBar';
// import { ChevronRightIcon } from "@heroicons/react/outline";

class RestaurantsPage extends Component {

  logout= () => {
    this.props.logout();
  }

  render() {

		return (
      <div className="container mx-auto ">
        <div>Restaurants Page</div>
        <BotNavBar />
      </div>
		);
	}
}

export default withAuth(RestaurantsPage);