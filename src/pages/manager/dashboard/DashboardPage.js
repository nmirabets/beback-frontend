import React, { Component } from 'react';

import { withAuth } from "../../../providers/AuthProvider";
import { withManager } from "../../../providers/ManagerProvider";
import BotNavBar from "../../../components/BotNavBar";
import DateFilterBar from "../../../components/manager/dashboard/DateFilterBar";
import ReactionSummary from "../../../components/manager/dashboard/ReactionSummary";
import DimReactionSummary from "../../../components/manager/dashboard/DimReactionSummary";
import RankDashboard from "../../../components/manager/dashboard/RankDashboard";
import Spacing from "../../../components/Spacing";

class DashboardPage extends Component {
	constructor(props) {
    super(props)
    this.state = {
      restaurantName: "",
      dateFilter: "d",
      dashboardData: {},
    }
  }

  componentDidMount() {

  }

  handleDateFilterClick = (button) => {
    this.setState({ dateFilter: button })
  }

  render() {

    const { dashboardData, restaurants, activeRestaurantIndex } = this.props.contextData;
    const { dateFilter } = this.state;
    let filteredData = [];
    let restaurantName = "";
    let totalPos = 0;
    let totalNeg = 0;

    if ( restaurants.length>0 && dashboardData.dataSummary.length>0 ){
      restaurantName = restaurants[activeRestaurantIndex].name;
      filteredData = dashboardData.dataSummary.filter((item) => { return item.period === dateFilter });
      totalPos = Object.values(filteredData.filter((item) => { return item.isPositive === true })).reduce((acc, { count }) => acc + count,0 );
      totalNeg = Object.values(filteredData.filter((item) => { return item.isPositive === false })).reduce((acc, { count }) => acc + count,0 );
      console.log("filteredData", filteredData);
    }

    return (
      <div className="container min-h-screen mx-auto flex flex-col bg-gray-200 w-screen">
        <div className="flex justify-center text-4xl font-light py-4 mb-2 mx-8 border-b border-yellow-900" >{restaurantName}</div>
        <ReactionSummary pos={totalPos} neg={totalNeg} />
        <DimReactionSummary 
          items={filteredData}
          dateFilter={dateFilter}
        />
        <RankDashboard 
          title="Lo que más ha gustado..." 
          isPositive={true} 
          items={[
            { name:"Arroz negro", reactions:152 }, 
            { name:"Sopa de ajo", reactions:78 }, 
            { name:"Nachos con queso", reactions:22 
            }]}
          />
        <RankDashboard 
          title="Lo que menos ha gustado..." 
          isPositive={false}  
          items={[
            { name:"Spaguetti Bolognesa", reactions:32 }, 
            { name:"Filet mignon", reactions:24 }, 
            { name:"Ensalada de la casa", reactions:5 }
          ]}
        />
        <DateFilterBar onClick={this.handleDateFilterClick} />
        <Spacing />
        <BotNavBar activeTab="dashboard" />
      </div>
    );
  }
}

export default withAuth(withManager(DashboardPage));
