import React, { Component } from "react";

import { withCustomer } from "../../../providers/CustomerProvider";
import reactionsTemplate from '../../../reactionsTemplate.json';
import ReactionStep2HeaderBuilder from "../../../components/customer/reaction/ReactionStep2HeaderBuilder";
import BackBtn from "../../../components/BackBtn";
import PoweredByFooter from '../../../components/customer/PoweredByFooter';
import apiClient from "../../../services/customerApiClient";
import PageHeader from "../../../components/customer/PageHeader";
import PageSubheader from "../../../components/customer/PageSubheader";
import ReactionItemComp from "../../../components/customer/reaction/ReactionItemComp";
import Spacing from "../../../components/Spacing";

class ReactionStep2ItemsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    const { section } = this.props.location.state;
    const { items } = this.props.contextData;
    const filtereditems = items.filter( (element) => { return element.sectionId === section._id });
    this.setState({
      items: filtereditems,
    })
  }

  handleOnClick = async (item) => {
    const { reaction: wipReaction } = this.props.location.state;
    const reaction = { ...wipReaction, subdimension: item.name}; 
    await apiClient.newReaction(reaction);
    this.props.history.push({ pathname: "/restaurant/reaction-end" });
  };

  render() {

      const { reaction } = this.props.location.state;
      const feedbackReaction = reactionsTemplate.filter( (element) => element.dimension === reaction.dimension && element.isPositive === reaction.isPositive);
      const { items } = this.state;

    return (
      <div className="w-screen h-screen mx-auto" >
          <div className="m-2">
            <BackBtn
              onClick={this.props.history.goBack}
            />
          </div>
          <div className="h-1/3 flex flex-col items-center justify-center">
            <PageHeader 
              name={
                <ReactionStep2HeaderBuilder 
                  dimension={feedbackReaction[0].dimension} isPositive={feedbackReaction[0].isPositive}
                />
              }
              style={"text-xl"}
            />
            <PageSubheader
              name={"Para acabar, escoge el plato..."}
              style={"text-base"}
            />
          </div>
          <div className="h-1/3 flex flex-col w-full" >
            {items.map((item, index) => {
              return (
                <ReactionItemComp 
                  key={index}
                  item={item}
                  index={index}
                  onClick={this.handleOnClick}
                  isPositive={reaction.isPositive}
                />
              )
            })}
            <Spacing />
          </div>
          <PoweredByFooter/>
      </div>
    )
  }
}

export default withCustomer(ReactionStep2ItemsPage);
