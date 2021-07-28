import React, { Component }  from 'react';

import { withAuth } from "../../../../providers/AuthProvider";
import { withManager } from "../../../../providers/ManagerProvider";
import BotNavBar from '../../../../components/BotNavBar';
import HeaderSaveBtn from '../../../../components/HeaderSaveBtn';
import Header from '../../../../components/Header';
import BackBtn from '../../../../components/BackBtn';
import apiClient from '../../../../services/apiClient';
import ImgUpload from '../../../../components/ImgUpload';

class MenuDetailEditPage extends Component {
	constructor(props) {
    super(props)
    this.state = {
      restaurantId: "",
			id: "",
			name: "",
      imgUrl: "",
    }
		this.nameInput = React.createRef();
  }

	componentDidMount() {
    const { isNew } = this.props.location.state;
    const { activeRestaurantIndex, restaurants } = this.props.contextData;
    const restaurantId = restaurants[activeRestaurantIndex]._id; 
		if (isNew) {
			this.setState({
        restaurantId,
        imgUrl: "",
				isNew: isNew,
			})
		} else {
			const { index } = this.props.location.state;
			const { menus } = this.props.contextData;
			const menu = menus[index];
			this.setState({
        restaurantId,
				id: menu._id,
				name: menu.name,
        imgUrl: "",
				isNew: isNew,
			})
		}
		this.nameInput.current.focus();
  }

	handleOnClickLeft = () => {
		this.props.history.push("/manager/menu/menu-edit")
	}

	handleSave = async () => {
		const { restaurantId, id, name, isNew } = this.state;
		if (typeof name !== 'undefined' && name!== "") {
		if (!isNew) {
			await apiClient.putMenu( id , name );
		} else {
      console.log("restaurantId", restaurantId)
      console.log("name", name)
			await apiClient.postNewMenu( restaurantId, name)
		}
		await this.props.loadMenusData();
		this.props.history.push("/manager/menu/menu-edit")
		}
	}

	handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

	handleDelete = async () => {
		const { id } = this.state;
		await apiClient.deleteMenu(id);
		await this.props.loadMenusData();
		this.props.history.push("/manager/menu/menu-edit");
	};

	render() {

	const { id, name, imgUrl, isNew } = this.state;

		return (
			<>
				<Header 
					mainTitle={name}
					RightComponent={HeaderSaveBtn}
					rightTitle="Guardar"
					onClickRight={this.handleSave}
					LeftComponent={BackBtn} 
					leftTitle="Atrás"
					onClickLeft={this.handleOnClickLeft}
				/>
				<div className="flex border border-b-2 border-gray-300">
					<ImgUpload className="text-blue-300 rounded-full w-20 p-3 my-8 mx-4 " url={imgUrl} />
					<div className="flex flex-col justify-start w-3/4 font-light mt-5 pr-8" >
						<label className="text-gray-500" >Nombre</label>
						<input className="text-xl font-light border-t border-b py-2 my-1 border-gray-400" type="text" id={id} name="name" defaultValue={name} onChange={this.handleChange} ref={this.nameInput}></input>
						<h3 className="text-xs font-light text-gray-400" >El nombre se mostrará en el QR</h3>
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

export default withAuth(withManager(MenuDetailEditPage));
