import React, { Component } from "react";

import { withAuth } from "../../../providers/AuthProvider";
import apiClient from "../../../services/apiClient";
import BotNavBar from "../../../components/manager/BotNavBar";
import DateFilterBar from "../../../components/manager/dashboard/DateFilterBar";
import ReactionSummary from "../../../components/manager/dashboard/ReactionSummary";
import DimReactionSummary from "../../../components/manager/dashboard/DimReactionSummary";
import RankDashboard from "../../../components/manager/dashboard/RankDashboard";

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: {},
  };
  }

  async componentDidMount() {

    const { restaurantId } = this.props.match.params;
    const restaurant = await apiClient.findRestaurantActiveMenu(restaurantId);
    const sections = await apiClient.getMenuSections(restaurant.activeMenu._id);
    const items =  await apiClient.getMenuItems(restaurant.activeMenu._id);

    this.setState({
      restaurant: restaurant,
      menu: restaurant.activeMenu,
      sections: sections,
      items: items,
    })
  }

  render() {

    return (
      <div className="container min-h-screen mx-auto flex flex-col bg-gray-200 w-screen">
        <div className="flex  justify-center text-4xl font-light py-4 mb-2 mx-8 border-b border-yellow-900">Tragamar</div>
        <ReactionSummary pos={50} neg={22} />
        <DimReactionSummary items={[ { name: "servicio", reactions: {"pos": 24, "neg":12}}, { name: "comida", reactions: {"pos": 42, "neg": 8}}, { name: "atmósfera", reactions: {"pos": 36, "neg": 4}} ]}/>
        <RankDashboard title="Lo que más ha gustado..." isPositive={true} items={[{ name:"Arroz negro", reactions:152 }, { name:"Sopa de ajo", reactions:78 }, { name:"Nachos con queso", reactions:22 }]}/>
        <RankDashboard title="Lo que menos ha gustado..." isPositive={false}  items={[{ name:"Spaguetti Bolognesa", reactions:32 }, { name:"Filet mignon", reactions:24 }, { name:"Ensalada de la casa", reactions:5 }]}/>
        <DateFilterBar />
        <BotNavBar activeTab="dashboard" />
      </div>
    );
  }
}

export default withAuth(Dashboard);
