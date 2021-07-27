import React, { Component }  from 'react';

import { withAuth } from "../../../providers/AuthProvider";
import { withManager } from "../../../providers/ManagerProvider";
import BotNavBar from '../../../components/manager/BotNavBar';
import HeaderSaveBtn from '../../../components/HeaderSaveBtn';
import Header from '../../../components/Header';
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
		await apiClient.deleteRestaurant(id);
		await this.props.loadRestaurantData();
		this.props.history.push("/manager/settings/restaurant-edit");
	};

	render() {

	const { id, name, logoUrl, isNew } = this.state;

		return (
			<>
				<Header 
					mainTitle={name}
					RightComponent={HeaderSaveBtn}
					rightTitle="Guardar"
					clickRightTo="/manager/settings/restaurant-selection"
					onClickRight={this.handleSave}
					LeftComponent={BackBtn} 
					leftTitle="Atrás"
					clickLeftTo="/manager/settings/restaurant-edit"
					onClickLeft={()=>{}}
				/>
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
				<BotNavBar activeTab="settings"/>
			</>
		);
	}
}

export default withAuth(withManager(EditDetailRestaurantPage));
