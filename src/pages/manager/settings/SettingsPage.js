import React, { Component }  from 'react';

import { withAuth } from "../../../providers/AuthProvider";
import { withManager } from "../../../providers/ManagerProvider";
import BotNavBar from '../../../components/BotNavBar';
import SectionHeader from '../../../components/manager/settings/SectionHeader';
import SettingsBtn from '../../../components/manager/settings/SettingsBtn';
import SettingsLabel from '../../../components/manager/settings/SettingsLabel';

class SettingsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [],
      activeRestaurantIndex: 0,
  };
  }

  componentDidMount() {
    const { restaurants, activeRestaurantIndex }  = this.props.contextData
    this.setState({
      restaurants: restaurants,
      activeRestaurantIndex: activeRestaurantIndex,
    })
  }

  handleRestaurantSelection = () => {
    this.props.history.push("/manager/settings/restaurant-selection");
  }

 	logout= () => {
    this.props.logout();
  }

	render() {

	const { username } = this.props.user;
  const { restaurants, activeRestaurantIndex }  = this.props.contextData

  let name=""
  if (restaurants.length > 0) {
    name  = restaurants[activeRestaurantIndex].name;
  }

  return (
    <>
      <header className= "flex h-14 items-center justify-center border border-gray-600 border-b-1 bg-gray-200">
        <h1 className="text-2xl font-extralight" >Ajustes</h1>
      </header>
      <SectionHeader title={"Restaurantes"} />
      <SettingsBtn title={name} onClick={this.handleRestaurantSelection}/>
      <SectionHeader title={"Cuenta"} />
      <SettingsLabel label={"Usuario: "} item={username} />
      <SettingsBtn title={"Cerrar sesión"} style={"text-red-800"} onClick={this.logout} />
      <BotNavBar activeTab="settings"/>
    </>
  );
	}
}

export default withAuth(withManager(SettingsPage));
