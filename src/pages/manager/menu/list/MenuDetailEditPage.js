import React, { Component }  from 'react';

import { withAuth } from "../../../../providers/AuthProvider";
import { withManager } from "../../../../providers/ManagerProvider";
import BotNavBar from '../../../../components/BotNavBar';
import HeaderSaveBtn from '../../../../components/HeaderSaveBtn';
import TopNavBar from '../../../../components/TopNavBar';
import BackBtn from '../../../../components/BackBtn';
import apiClient from '../../../../services/managerApiClient';
import Spacing from '../../../../components/Spacing';

class MenuDetailEditPage extends Component {
	constructor(props) {
    super(props)
    this.state = {
      menu: {},
			isNew: false,
    }
		this.nameInput = React.createRef();
  }

	componentDidMount() {
    const { menu, isNew } = this.props.location.state;
		this.setState({
			menu,
			isNew,
		})
		this.nameInput.current.focus();
  }

	handleOnClickLeft = () => {
		this.props.history.push("/manager/menu/menu-edit")
	}

	handleSave = async () => {
		const { menu, isNew } = this.state;
		if (typeof menu.name !== 'undefined' && menu.name!== "") {
		if (!isNew) {
			await apiClient.updateMenu(menu);
		} else {
			await apiClient.createMenu(menu)
		}
		await this.props.loadMenusData(menu.restaurantId);
		this.props.history.push("/manager/menu/menu-edit")
		}
	}

	handleChange = event => {
    const { name, value } = event.target;
		this.setState(prevState => ({
    menu: {
			...prevState.menu,
			[name]: value,
		}}))	
  }

	handleDelete = async () => {
		const { menu } = this.state;
		await apiClient.deleteMenu(menu._id);
		await this.props.loadMenusData(menu.restaurantId);
		this.props.history.push("/manager/menu/menu-edit");
	};

	render() {

	const { menu, isNew } = this.state;

		return (
			<>
				<TopNavBar 
					mainTitle={menu.name}
					RightComponent={HeaderSaveBtn}
					rightTitle="Guardar"
					onClickRight={this.handleSave}
					LeftComponent={BackBtn} 
					leftTitle="Atrás"
					onClickLeft={this.handleOnClickLeft}
				/>
				<Spacing />
				<div className="flex flex-col items-center">
					<div className="flex flex-col w-3/4 my-4" >
						<label className="text-sm text-gray-500" >Nombre</label>
						<input className="text-xl font-light border py-2 border-primary-light rounded-lg" 
							type="text" 
							name="name"
							defaultValue={menu.name}
							onChange={this.handleChange}
							ref={this.nameInput} 
						/>
						<h3 className="text-xs font-light text-gray-400" >El nombre se mostrará en el QR</h3>
						<div className="flex justify-end " >
							{(!isNew ? 
								<button 
								className="text-xs text-red-700 font-light border-b border-red-700 my-2" 
								onClick={this.handleDelete} >Eliminar</button> : "")}
						</div>
					</div>
				</div>
				<BotNavBar activeTab="settings"/>
			</>
		);
	}
}

export default withAuth(withManager(MenuDetailEditPage));
