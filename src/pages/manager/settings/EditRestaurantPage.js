import React, { Component }  from 'react';
import { Link } from "react-router-dom";

import { withAuth } from "../../../providers/AuthProvider";
import { withManager } from "../../../providers/ManagerProvider";
import BotNavBar from '../../../components/manager/BotNavBar';
import HeaderBtn from '../../../components/HeaderBtn';
import Header from '../../../components/Header';
import { ChevronRightIcon } from '@heroicons/react/outline';

class EditRestaurantPage extends Component {

	render() {

	const { restaurants } = this.props.contextData;

		return (
			<>
				<Header 
					mainTitle="Restaurantes" 
					RightComponent={HeaderBtn}
					rightTitle="Guardar"
					clickRightTo="/manager/settings/restaurant-selection"
					LeftComponent={HeaderBtn} 
					leftTitle="Añadir"
					clickLeftTo="/manager/settings/restaurant-new"
				/>
				
				<div>
					{restaurants.map( (restaurant, index) => {
						return (
							<Link to={{ pathname: '/manager/settings/restaurant-edit-detail', state:  { restaurant} }} key={index} className="flex p-3 text-xl justify-between border border-gray-300" >
								<h3 className="font-light mx-2">{restaurant.name}</h3>
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

export default withAuth(withManager(EditRestaurantPage));
