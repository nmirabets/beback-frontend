import React, { Component } from 'react';

import { withAuth } from "../../../providers/AuthProvider";
import { withManager } from "../../../providers/ManagerProvider";
import reactionsTemplate from '../../../reactionsTemplate.json';
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
      data: [],
      globalSummary: {
        totalPos:0,
        totalNeg:0,
      },
      dimensionSummary: [],
    }
  }

  handleDateFilterClick = (button) => {
    this.setState({ dateFilter: button })
  }

  filterData = () => {
    const { dashboardData, restaurants } = this.props.contextData;
    const { dateFilter } = this.state;
    let filteredData = [];

    if ( restaurants.length>0 && dashboardData.dataSummary.length>0 ){
      filteredData = dashboardData.dataSummary.filter((item) => { return item.period === dateFilter });
    }
    return filteredData;
  }

  processGlobalSummary = (data) => {

    const totalPos = Object.values(data.filter((item) => { return item.isPositive === true })).reduce((acc, { count }) => acc + count,0 );
    const totalNeg = Object.values(data.filter((item) => { return item.isPositive === false })).reduce((acc, { count }) => acc + count,0 );

    const globalSummary = {
        totalPos,
        totalNeg,
    }

    return globalSummary;
  }

  processDimensionSummary = (data) => {
    const dimensions = reactionsTemplate.filter((item) => { return item.isPositive===true });
    const processedItems = [];

    if (data.length>0) {
      dimensions.forEach((element) => {
        const calcItem={
          dimension: element.dimension,
          pos: data.filter((item) => { return item.dimension === element.dimension && item.isPositive===true })[0].count,
          neg: data.filter((item) => { return item.dimension === element.dimension && item.isPositive===false})[0].count,
        };
        processedItems.push(calcItem);
      })
    }
    return processedItems;
  }



  render() {

    const { restaurants, dashboardData, activeRestaurantIndex } = this.props.contextData;
    let restaurantName = "";
    let { data, globalSummary, dimensionSummary } = this.state;
    if ( restaurants.length>0 && dashboardData.dataSummary.length>0 ){
      restaurantName = restaurants[activeRestaurantIndex].name;
      data = this.filterData();
      globalSummary = this.processGlobalSummary(data);
      dimensionSummary = this.processDimensionSummary(data);
    }

    const { dateFilter } = this.state;

    return (
      <div className="container min-h-screen mx-auto flex flex-col w-screen bg-primary bg-opacity-30">
        <div className="flex justify-center text-4xl font-thin py-4 mb-2 mx-8 border-b border-secondary-dark " >{restaurantName}</div>
        <ReactionSummary pos={globalSummary.totalPos} neg={globalSummary.totalNeg} />
        <DimReactionSummary 
          items={dimensionSummary}
          dateFilter={dateFilter}
        />
        <RankDashboard 
          title="Lo que más ha gustado..." 
          isPositive={true} 
          items={[
            { name:"Arroz negro", reactions:152 }, 
            { name:"Paella marinera", reactions:78 }, 
            { name:"Ceviche", reactions:22 
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
