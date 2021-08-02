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
		await this.props.loadSectionsData();
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
				<div className="flex border border-b-2 border-gray-300">
					<ImgUpload className="text-blue-300 rounded-full w-20 p-3 my-8 mx-4 " url={section.imgUrl} />
					<div className="flex flex-col justify-start w-3/4 font-light mt-5 pr-8" >
						<label className="text-gray-500" >Nombre</label>
						<input className="text-xl font-light border-t border-b py-2 my-1 border-gray-400" type="text" id={section.id} name="name" defaultValue={section.name} onChange={this.handleChange} ref={this.nameInput}></input>
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
