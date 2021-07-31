import React, { Component } from "react";

import { withAuth } from "../../../providers/AuthProvider";
import { withManager } from "../../../providers/ManagerProvider";
import BotNavBar from "../../../components/BotNavBar";
import DateFilterBar from "../../../components/manager/dashboard/DateFilterBar";
import ReactionSummary from "../../../components/manager/dashboard/ReactionSummary";
import DimReactionSummary from "../../../components/manager/dashboard/DimReactionSummary";
import RankDashboard from "../../../components/manager/dashboard/RankDashboard";
import Spacing from "../../../components/Spacing";
// import apiClient from "../../../services/managerApiClient";

class DashboardPage extends Component {
	constructor(props) {
    super(props)
    this.state = {
      data: [{
        period: ('d','w','m','y'),
        summary: [{
          name: ('total', 'service', 'food', 'atmosphere'),
          pos: '',
          neg: '',
          tot: '',
        }],
        top: [{ name: '', count: ''}],
        bot: [{ name: '', count: ''}],
      }]
    }
  }

  componentDidMount() {

  }

// CalculateDataSummaryItem = (reactions, period, dimension, isPositive) => {
//   const dateLimit = new Date();
//   dateLimit.setDate( dateLimit.getDate() - period.dayCount );
//   console.log("dateLimit", dateLimit)
//   console.log("created_at", reactions[0].created_at)
//   return reactions.filter( (reaction) => 
//     ((Date(reaction.created_at) > dateLimit) &&
//     (reaction.dimension === dimension) &&
//     (reaction.isPositive === isPositive))).length
// };

// CalculateRankedItems = (reactions, period, isPositive) => {
// 	const dateLimit = Date() - period.dayCount;
// 	const filteredReactions = reactions.filter(reaction => 
// 		(Date(reaction.created_at) >= Date(dateLimit)) &&
// 		(reaction.isPositive === isPositive))

// 	var holder = {};

// 	filteredReactions.forEach( reaction => {
// 		if (holder.hasOwnProperty.call(reaction.subdimension)) {
// 			holder[reaction.subdimension] = holder[reaction.subdimension] + 1;
// 		} else {
// 			holder[reaction.subdimension] = 1;
// 		}
// 	});

// 	var obj2 = [];

// 	for (var prop in holder) {
// 		obj2.push({ name: prop, value: holder[prop] });
// 	}

// 	return obj2

// };

  handleDateFilterClick = async (button) => {
    // console.log("button", button)
    // const { activeRestaurantIndex, restaurants } = this.props.contextData;
    // const restaurantId = restaurants[activeRestaurantIndex]._id;
    // const reactions = await apiClient.getDashboardData(restaurantId);
    // console.log("reactions",reactions);
    // const periods = [
		// 	{ name: 'd', dayCount: 1 },
		// 	{ name: 'w', dayCount: 7 },
		// 	{ name: 'm', dayCount: 30 },
		// 	{ name: 'y', dayCount: 365 }
		// ];
		// const dimensions = ['servicio', 'comida', 'atmósfera'];
		// const isPositive = [true, false];

		// var dataSummary = [];

		// periods.forEach(period => {
		// 	dimensions.forEach(dimension => {
		// 		isPositive.forEach(isPositive => {
		// 			const count = this.CalculateDataSummaryItem(reactions, period, dimension, isPositive);
		// 			const dataItem = {
		// 				period,
		// 				dimension,
		// 				isPositive,
		// 				count,
		// 			};
		// 			dataSummary.push(dataItem);
		// 		})
		// 	})
		// })

    // console.log("result", dataSummary)

  }

  render() {

    return (
      <div className="container min-h-screen mx-auto flex flex-col bg-gray-200 w-screen">
        <div className="flex justify-center text-4xl font-light py-4 mb-2 mx-8 border-b border-yellow-900" >Tragamar</div>
        <ReactionSummary pos={50} neg={22} />
        <DimReactionSummary items={[ { name: "servicio", reactions: {"pos": 24, "neg":12}}, { name: "comida", reactions: {"pos": 42, "neg": 8}}, { name: "atmósfera", reactions: {"pos": 36, "neg": 4}} ]}/>
        <RankDashboard title="Lo que más ha gustado..." isPositive={true} items={[{ name:"Arroz negro", reactions:152 }, { name:"Sopa de ajo", reactions:78 }, { name:"Nachos con queso", reactions:22 }]}/>
        <RankDashboard title="Lo que menos ha gustado..." isPositive={false}  items={[{ name:"Spaguetti Bolognesa", reactions:32 }, { name:"Filet mignon", reactions:24 }, { name:"Ensalada de la casa", reactions:5 }]}/>
        <DateFilterBar onClick={this.handleDateFilterClick} />
        <Spacing />
        <BotNavBar activeTab="dashboard" />
      </div>
    );
  }
}

export default withAuth(withManager(DashboardPage));
