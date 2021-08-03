import React, { Component }  from 'react';

import { withAuth } from "../../../providers/AuthProvider";
import { withManager } from "../../../providers/ManagerProvider";
import apiClient from '../../../services/managerApiClient';
import BotNavBar from '../../../components/BotNavBar';
import HeaderSaveBtn from '../../../components/HeaderSaveBtn';
import TopNavBar from '../../../components/TopNavBar';
import BackBtn from '../../../components/BackBtn';
import ImgUpload from '../../../components/ImgUpload';
import Spacing from '../../../components/Spacing';

class DetailEditRestaurantPage extends Component {
	constructor(props) {
    super(props)
    this.state = {
			id: "",
			name: "",
			logoUrl: "",
    }
		this.nameInput = React.createRef();
  }

	componentDidMount() {
    const { isNew } = this.props.location.state;
		if (isNew) {
			this.setState({
				isNew: isNew,
			})
		} else {
			const { index } = this.props.location.state;
			const { restaurants } = this.props.contextData;
			const restaurant = restaurants[index];
			this.setState({
				id: restaurant._id,
				name: restaurant.name,
				logoUrl: restaurant.logoUrl,
				isNew: isNew,
			})
		}
		this.nameInput.current.focus();
  }

	handleOnClickLeft = () => {
		this.props.history.push("/manager/settings/restaurant-edit")
	}

	handleSave = async () => {
		const { id, name, isNew } = this.state;
		if (typeof name !== 'undefined' && name!== "") {
		if (!isNew) {
			await apiClient.putRestaurant( id, name );
		} else {
			await apiClient.postNewRestaurant(name)
		}
		await this.props.loadRestaurantData();
		this.props.history.push("/manager/settings/restaurant-edit")
		}
	}

	handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

	handleDelete = async () => {
		const { id } = this.state;

		await apiClient.deleteRestaurant(id);
		await this.props.loadRestaurantData();
		this.props.history.push("/manager/settings/restaurant-edit");
	};

	render() {
	const { id, name, logoUrl, isNew } = this.state;

		return (
			<>
				<TopNavBar 
					mainTitle={name}
					RightComponent={HeaderSaveBtn}
					rightTitle="Guardar"
					onClickRight={this.handleSave}
					LeftComponent={BackBtn} 
					leftTitle="Atrás"
					onClickLeft={this.handleOnClickLeft}
				/>
				<Spacing />
				<div className="flex border border-b-2 border-gray-300">
					<ImgUpload className="text-blue-300 rounded-full w-20 p-3 my-8 mx-4 " url={logoUrl} />
					<div className="flex flex-col justify-start w-3/4 font-light mt-5 pr-8" >
						<label className="text-gray-500" >Nombre</label>
						<input className="text-xl font-light border-t border-b py-2 my-1 border-gray-400" type="text" id={id} name="name" defaultValue={name} onChange={this.handleChange} ref={this.nameInput}></input>
						<h3 className="text-xs font-light text-gray-400" >El nombre se mostrará en el menú QR</h3>
						<div className="flex justify-end " >
							{(!isNew ? <button className="text-xs text-red-700 font-light border-b border-red-700 my-2" onClick={this.handleDelete} >Eliminar</button> : "")}
						</div>
					</div>
				</div>
				<Spacing />
				<BotNavBar activeTab="settings"/>
			</>
		);
	}
}

export default withAuth(withManager(DetailEditRestaurantPage));
