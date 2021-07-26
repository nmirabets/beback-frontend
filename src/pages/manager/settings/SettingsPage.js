import React, { Component }  from 'react';

import { withAuth } from "../../../providers/AuthProvider";
import BotNavBar from '../../../components/manager/BotNavBar';
import { ChevronRightIcon } from "@heroicons/react/outline";


class SettingsPage extends Component {

 	logout= () => {
    this.props.logout();
  }

	handleClick = () => {
		this.props.onClick("restaurants");
	}




	render() {

	const { username } = this.props.user;

		return (
			<div className="container mx-auto ">
				<h1 className="text-4xl text-gray-800 font-normal mx-3 px-2 py-2 my-4 border-b-2 border-gray-400">Restaurante</h1>
				<div className="flex mx-5 p-3 border rounded-md border-gray-400 text-xl justify-between" onClick={this.handleClick}>
					<p className="font-light ">Tragamar</p>
					<ChevronRightIcon className="text-gray-600 text-xs w-8 h-8 text-thin"/>
				</div>
				<h1 className="text-3xl text-gray-800 font-normal mx-3 px-2 py-2 my-4 border-b-2 border-gray-400">Cuenta</h1>
				<div className="flex mx-5 p-3 my-2 border rounded-md border-gray-400 text-xl font-thin" >
					<span>Usuario: </span>
					<span className="font-light mx-4">{username}</span>
				</div>
				<div className="flex mx-5 p-3 border rounded-md border-gray-400 text-xl justify-between" onClick={this.logout}>
					<p className="font-light text-red-800">Cerrar sesión</p>
					<ChevronRightIcon className="text-gray-600 text-xs w-8 h-8 text-thin"/>
				</div> 
				<BotNavBar activeTab="settings"/>
			</div>
		);
	}
}

export default withAuth(SettingsPage);
