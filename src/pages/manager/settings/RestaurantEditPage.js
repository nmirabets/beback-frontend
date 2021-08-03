import React, { Component }  from 'react';
import { ChevronRightIcon } from '@heroicons/react/outline';

import { withAuth } from "../../../providers/AuthProvider";
import { withManager } from "../../../providers/ManagerProvider";
import BotNavBar from '../../../components/BotNavBar';
import HeaderBtn from '../../../components/HeaderBtn';
import TopNavBar from '../../../components/TopNavBar';
import ListItemComp from '../../../components/ListItemComp';
import Spacing from '../../../components/Spacing';

class EditRestaurantPage extends Component {

	handleOnClickRight = () => {
		this.props.history.push("/manager/settings/restaurant-selection")
	}

	handleOnClickLeft = () => {
		this.props.history.push({pathname: "/manager/settings/restaurant-edit-detail", state: { isNew: true }});
	}

	handleOnClick = (index) => {
		this.props.history.push({ pathname: '/manager/settings/restaurant-edit-detail', state:  { index, isNew: false } });
	}

	render() {
	const { restaurants } = this.props.contextData;

		return (
			<>
				<TopNavBar 
					mainTitle="Restaurantes" 
					RightComponent={HeaderBtn}
					rightTitle="Guardar"
					onClickRight={this.handleOnClickRight}
					LeftComponent={HeaderBtn} 
					leftTitle="Añadir"
					onClickLeft={this.handleOnClickLeft}
				/>
				<Spacing />
				<div>
					{restaurants.map( (restaurant, index) => {
						return (
							<ListItemComp
								onClick={this.handleOnClick}
								name={restaurant.name}
								key={index}
								index={index}
								Icon={ChevronRightIcon}
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

export default withAuth(withManager(EditRestaurantPage));
