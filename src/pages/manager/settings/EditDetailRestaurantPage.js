import React, { Component }  from 'react';

import { withAuth } from "../../../providers/AuthProvider";
import { withManager } from "../../../providers/ManagerProvider";
import BotNavBar from '../../../components/manager/BotNavBar';
import HeaderSaveBtn from '../../../components/HeaderSaveBtn';
import PageHeader from '../../../components/Header';
import BackBtn from '../../../components/HeaderBackBtn';
import apiClient from '../../../services/apiClient';
import ImgUpload from '../../../components/ImgUpload';

class EditDetailRestaurantPage extends Component {
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
    const { restaurant, isNew } = this.props.location.state;
		this.setState({
			id: restaurant._id,
			name: restaurant.name,
			logoUrl: restaurant.logoUrl,
			isNew: isNew,
		})
		this.nameInput.current.focus();
  }

	handleSave = async () => {
		const { id, name, isNew } = this.state;
		if (!isNew) {
			await apiClient.putRestaurant( id, name );
		} else {
			await apiClient.postNewRestaurant(name)
		}
		await this.props.loadRestaurantData();
	}

	handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

	handleDelete = async () => {
		const { id } = this.state;
		const deletedRest = await apiClient.deleteRestaurant(id);
		console.log(deletedRest)
		await this.props.loadRestaurantData();
	};

	render() {

	const { id, name, logoUrl, isNew } = this.state;

		return (
			<>
				<PageHeader 
					mainTitle={name}
					RightComponent={HeaderSaveBtn}
					rightTitle="Guardar"
					clickRightTo="/manager/settings/restaurant-edit"
					onClickRight={this.handleSave}
					LeftComponent={BackBtn} 
					leftTitle="Atrás"
					clickLeftTo="/manager/settings/restaurant-edit"
					onClickLeft={()=>{}}
				/>
				<div className="flex flex-row border border-b-2 border-gray-300">
					<ImgUpload url={logoUrl}/>
					<div className="font-light my-5 " >
						<label className="text-gray-500" >Nombre</label><br/>
						<input className="text-xl font-light border-t border-b  py-2 my-1 border-gray-400" type="text" id={id} name="name" defaultValue={name} onChange={this.handleChange} ref={this.nameInput}></input><br/>
						<h3 className="text-xs font-light text-gray-400" >El nombre se mostrará en el menú QR</h3>
						<div className="flex justify-end " >
							{(!isNew ? <button className="text-xs text-red-700 font-light border-b border-red-700" onClick={this.handleDelete} >Eliminar restaurante</button> : "")}
						</div>
					</div>
				</div>
				<BotNavBar activeTab="settings"/>
			</>
		);
	}
}

export default withAuth(withManager(EditDetailRestaurantPage));
