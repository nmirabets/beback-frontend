import React, { Component }  from 'react';
import { Link } from "react-router-dom";

import { withAuth } from "../../../providers/AuthProvider";
import { withManager } from "../../../providers/ManagerProvider";
import BotNavBar from '../../../components/manager/BotNavBar';
import HeaderBtn from '../../../components/HeaderBtn';
import BackBtn from '../../../components/HeaderBackBtn';
import Header from '../../../components/Header';
import { ChevronRightIcon } from '@heroicons/react/outline';

class RestaurantSelectionPage extends Component {

	handleOnClick = (e) => {
		this.props.activateRestaurant( e.target.id )
	}

	render() {

	const { restaurants } = this.props.contextData;

		return (
			<>
				<Header 
					mainTitle="Restaurantes" 
					RightComponent={HeaderBtn}
					rightTitle="Editar"
					clickRightTo="/manager/settings/restaurant-edit"
					LeftComponent={BackBtn} 
					leftTitle="Atrás"
					clickLeftTo="/manager/settings"
				/>
				<div>
					{restaurants.map( (restaurant, index) => {
						return (
							<Link to="/manager/settings" key={index} id={index} className="flex p-3 text-xl justify-between border border-gray-300" onClick={this.handleOnClick}>
								<h3 id={index} className="font-light mx-2">{restaurant.name}</h3>
              	<ChevronRightIcon id={index} className="w-6 h-6 text-gray-600"/>
              </Link> 
						)
					})}
				</div>
				<BotNavBar activeTab="settings"/>
			</>
		);
	}
}

export default withAuth(withManager(RestaurantSelectionPage));
