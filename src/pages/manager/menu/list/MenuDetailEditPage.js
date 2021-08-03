import React, { Component }  from 'react';

import { withAuth } from "../../../../providers/AuthProvider";
import { withManager } from "../../../../providers/ManagerProvider";
import BotNavBar from '../../../../components/BotNavBar';
import HeaderSaveBtn from '../../../../components/HeaderSaveBtn';
import TopNavBar from '../../../../components/TopNavBar';
import BackBtn from '../../../../components/BackBtn';
import apiClient from '../../../../services/managerApiClient';
import ImgUpload from '../../../../components/ImgUpload';
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
				<div className="flex border border-b-2 border-gray-300">
					<ImgUpload 
						className="text-blue-300 rounded-full w-20 p-3 my-8 mx-4 " 
						url={menu.imgUrl} 
					/>
					<div className="flex flex-col justify-start w-3/4 font-light mt-5 pr-8" >
						<label className="text-gray-500" >Nombre</label>
						<input 
							className="text-xl font-light border-t border-b py-2 my-1 border-gray-400" 
							type="text" 
							id={menu.id} 
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
