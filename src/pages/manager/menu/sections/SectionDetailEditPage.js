import React, { Component }  from 'react';

import { withAuth } from "../../../../providers/AuthProvider";
import { withManager } from "../../../../providers/ManagerProvider";
import BotNavBar from '../../../../components/BotNavBar';
import HeaderSaveBtn from '../../../../components/HeaderSaveBtn';
import TopNavBar from '../../../../components/TopNavBar';
import BackBtn from '../../../../components/BackBtn';
import apiClient from '../../../../services/managerApiClient';
import Spacing from '../../../../components/Spacing';

class SectionDetailEditPage extends Component {
	constructor(props) {
    super(props)
    this.state = {
			restaurantId: "",
			menuId: "",
      section: {},
			isNew: false,
    }
		this.nameInput = React.createRef();
  }

	componentDidMount() {
    const { section, isNew } = this.props.location.state;
		this.setState({
			restaurantId: section.restaurantId,
			menuId: section.menuId,
			section,
			isNew,
		})
		this.nameInput.current.focus();
  }

	handleOnClickLeft = () => {
		const { restaurantId, menuId } = this.state;
		this.props.history.push({pathname: "/manager/menu/sections-edit", state: { restaurantId, menuId }});
	}

	handleSave = async () => {
		const { restaurantId, menuId, section, isNew } = this.state;
		if (typeof section.name !== 'undefined' && section.name!== "") {
			if (!isNew) {
				await apiClient.updateSection(section);
			} else {
				await apiClient.createSection(section);
			}
			await this.props.loadSectionsData(section.restaurantId);
			this.props.history.push({pathname: "/manager/menu/sections-edit", state: { restaurantId, menuId }});
		}
	}

	handleChange = event => {
    const { name, value } = event.target;
		this.setState(prevState => ({
			section: {
				...prevState.section,
				[name]: value,
		}}))
  };

	handleDelete = async () => {
		const { restaurantId, menuId, section } = this.state;
		await apiClient.deleteSection(section._id);
		await this.props.loadSectionsData(restaurantId);
		this.props.history.push({pathname: "/manager/menu/sections-edit", state: { restaurantId, menuId }});
	};

	render() {

	const { section, isNew } = this.state;

		return (
			<>
				<TopNavBar 
					mainTitle={section.name}
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
							defaultValue={section.name}
							onChange={this.handleChange}
							ref={this.nameInput} 
						/>
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

export default withAuth(withManager(SectionDetailEditPage));
