import React, { Component }  from 'react';

import { withAuth } from "../../../../providers/AuthProvider";
import { withManager } from "../../../../providers/ManagerProvider";
import BotNavBar from '../../../../components/BotNavBar';
import HeaderSaveBtn from '../../../../components/HeaderSaveBtn';
import TopNavBar from '../../../../components/TopNavBar';
import BackBtn from '../../../../components/BackBtn';
import apiClient from '../../../../services/managerApiClient';
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
			nameError: false,
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
			await this.props.loadItemsData(item.restaurantId);
			this.props.history.push({pathname: "/manager/menu/items-edit", state: { restaurantId, menuId, sectionId }});
		} else {
			this.setState({
				nameError: true,
			})
		}
	}

	handleChange = event => {
    const { name, value } = event.target;
		this.setState(prevState => ({
			item: {
				...prevState.item,
				[name]: value,
		}, nameError: false }))
  };

	handleDelete = async () => {
		const { restaurantId, menuId, sectionId, item } = this.state;
		await apiClient.deleteItem(item._id);
		await this.props.loadItemsData(restaurantId);
		this.props.history.push({pathname: "/manager/menu/items-edit", state: { restaurantId, menuId, sectionId }});
	};

	render() {

	const { item, isNew, nameError } = this.state;

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
				<div className="flex flex-col items-center">
					<div className="flex flex-col font-light w-3/4 my-4" >
						<label className="text-sm text-gray-500" >Nombre</label>
						<input className="text-xl font-light border py-2 border-primary-light rounded-lg" 
							type="text" 
							name="name"
							defaultValue={item.name}
							onChange={this.handleChange}
							ref={this.nameInput} 
						/>
						{(nameError === false?
							<h3 className="text-xs font-light text-gray-400">El nombre se mostrará en el menú QR</h3> :
							<h3 className="text-xs font-light text-red-700">Debes introducir un nombre</h3> )}
						<label className="text-sm text-gray-500" >Descripción</label>
						<textarea className="text-xl font-light border py-2 border-primary-light rounded-lg" name="description" rows="3" defaultValue={item.description} onChange={this.handleChange} type="text"></textarea>
						<label className="text-sm text-gray-500" >Precio</label>
						<input className="text-xl font-light border py-2 border-primary-light rounded-lg" type="text" name="price" defaultValue={item.price} onChange={this.handleChange} ></input>
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
