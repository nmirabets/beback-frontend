import React, { Component }  from 'react';

import { withAuth } from "../../../providers/AuthProvider";
import { withManager } from "../../../providers/ManagerProvider";
import BotNavBar from '../../../components/BotNavBar';
import HeaderBtn from '../../../components/HeaderBtn';
import BackBtn from '../../../components/BackBtn';
import TopNavBar from '../../../components/TopNavBar';
import ListItemComp from '../../../components/ListItemComp';
import Spacing from '../../../components/Spacing';

class RestaurantSelectionPage extends Component {

	handleOnItemClick = (index) => {
		this.props.activateRestaurant(index);
		this.props.history.push("/manager/settings");
	}

	handleOnClickRight = () => {
		this.props.history.push("/manager/settings/restaurant-edit");
	}

	handleOnClickLeft = () => {
		this.props.history.push("/manager/settings");
	}

	render() {

	const { restaurants } = this.props.contextData;

		return (
			<>
				<TopNavBar 
					mainTitle="Restaurantes" 
					RightComponent={HeaderBtn}
					rightTitle="Editar"
					onClickRight={this.handleOnClickRight}
					LeftComponent={BackBtn} 
					leftTitle="Atrás"
					onClickLeft={this.handleOnClickLeft}
				/>
				<Spacing />
				<div>
					{restaurants.map( (restaurant, index) => {
						return (
							<ListItemComp
								onClick={this.handleOnItemClick}
								name={restaurant.name}
								key={index}
								index={index}
							/>
						)
					})}
				</div>
				<Spacing />
				<BotNavBar activeTab="settings"/>
			</>
		);
	}
}

export default withAuth(withManager(RestaurantSelectionPage));
