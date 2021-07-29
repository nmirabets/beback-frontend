import React, { Component }  from 'react';

import { withAuth } from "../../../../providers/AuthProvider";
import { withManager } from "../../../../providers/ManagerProvider";
import BotNavBar from '../../../../components/BotNavBar';
import HeaderSaveBtn from '../../../../components/HeaderSaveBtn';
import TopNavBar from '../../../../components/TopNavBar';
import BackBtn from '../../../../components/BackBtn';
import apiClient from '../../../../services/apiClient';
import ImgUpload from '../../../../components/ImgUpload';
import Spacing from '../../../../components/Spacing';

class ItemDetailEditPage extends Component {
	constructor(props) {
    super(props)
    this.state = {
			restaurantId: "",
			menuId: "",
			sectionId: "",
			isNew: false,
			item: {},
    }
		this.nameInput = React.createRef();
  }

	componentDidMount() {
    const { item, isNew } = this.props.location.state;
		this.setState({
			restaurantId: item.restaurantId,
			menuId: item.menuId,
			sectionId: item.sectionId,
			item,
			isNew,
		})
		this.nameInput.current.focus();
  }

	handleOnClickLeft = () => {
		// back to ItemListEditPage
		const { restaurantId, menuId, sectionId } = this.state;
		this.props.history.push({pathname: "/manager/menu/items-edit", state: { restaurantId, menuId, sectionId }});
	}

	handleSave = async () => {
		const { restaurantId, menuId, sectionId, item, isNew } = this.state;
		if (typeof item.name !== 'undefined' && item.name!== "") {
			if (!isNew) {
				// update item
				await apiClient.updateItem(item);
			} else {
				// create item
				await apiClient.createItem(item)
			}
			await this.props.loadItemsData();
			this.props.history.push({pathname: "/manager/menu/items-edit", state: { restaurantId, menuId, sectionId }});
		}
	}

	handleChange = event => {
    const { name, value } = event.target;
		this.setState(prevState => ({
			item: {
				...prevState.item,
				[name]: value,
		}}))
  };

	handleDelete = async () => {
		const { restaurantId, menuId, sectionId, item } = this.state;
		await apiClient.deleteItem(item._id);
		await this.props.loadItemsData();
		this.props.history.push({pathname: "/manager/menu/items-edit", state: { restaurantId, menuId, sectionId }});
	};

	render() {

	const { item, isNew } = this.state;

		return (
			<>
				<TopNavBar 
					mainTitle={item.name}
					RightComponent={HeaderSaveBtn}
					rightTitle="Guardar"
					onClickRight={this.handleSave}
					LeftComponent={BackBtn} 
					leftTitle="Atrás"
					onClickLeft={this.handleOnClickLeft}
				/>
				<Spacing />
				<div className="flex border border-b-2 border-gray-300">
					<ImgUpload className="text-blue-300 rounded-full w-20 p-3 my-8 mx-4 " url={item.imgUrl} />
					<div className="flex flex-col justify-start w-3/4 font-light mt-5 pr-8" >
						<label className="text-gray-500" >Nombre</label>
						<input className="text-xl font-light border py-2 border-gray-400" type="text" name="name" defaultValue={item.name} onChange={this.handleChange} ref={this.nameInput}></input>
						<h3 className="text-xs font-light text-gray-400" >El nombre se mostrará en el QR</h3>
						<label className="text-gray-500" >Descripción</label>
						<textarea className="text-xl font-light border py-2 border-gray-400" name="description" rows="3" defaultValue={item.description} onChange={this.handleChange} type="text"></textarea>
						<label className="text-gray-500" >Precio</label>
						<input className="text-xl font-light border py-2 mb-5 border-gray-400" type="text" name="price" defaultValue={item.price} onChange={this.handleChange} ></input>
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

export default withAuth(withManager(ItemDetailEditPage));
