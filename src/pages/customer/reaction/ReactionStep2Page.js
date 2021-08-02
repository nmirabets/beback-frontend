import React, { Component } from "react";

import { withCustomer } from "../../../providers/CustomerProvider";
import reactionsTemplate from '../../../reactionsTemplate.json';
import BackBtn from "../../../components/BackBtn";
import PoweredByFooter from '../../../components/customer/PoweredByFooter';
import apiClient from "../../../services/customerApiClient";
import PageHeader from "../../../components/customer/PageHeader";
import ReactionStep2Btn from "../../../components/customer/reactions/ReactionStep2Btn";
import ReactionStep2HeaderBuilder from "../../../components/customer/reactions/ReactionStep2HeaderBuilder";

class ReactionStep2Page extends Component {

  handleOnClick = async ( subdimension ) => {
    console.log("hey")
    const { reaction: wipReaction } = this.props.location.state;
    const reaction = { ...wipReaction, subdimension};
    await apiClient.newReaction(reaction);
    this.props.history.push({ pathname: "/restaurant/reaction-end" });
  };

  render() {
      const { reaction } = this.props.location.state;
      const feedbackReaction = reactionsTemplate.filter( (element) => element.dimension === reaction.dimension && element.isPositive === reaction.isPositive);

    return (
      <div className="flex flex-col h-screen bg-gray-200" >
        <div className="flex flex-col items-center justify-between mx-auto h-full" >
        <div className="w-screen">
          <BackBtn 
            title="Atrás"
            onClick={this.props.history.goBack} 
          />
          <PageHeader 
            name={
              <ReactionStep2HeaderBuilder 
                dimension={feedbackReaction[0].dimension} isPositive={feedbackReaction[0].isPositive}
              />
            }
            style={"text-2xl"}
          />
        </div>
          <div className="flex flex-col items-center text-3xl font-normal text-yellow-700 mb-32 " >
            {feedbackReaction[0].subdimension.map((subdimension, index) => {
              return( 
                <ReactionStep2Btn 
                  key={index}
                  name={subdimension}
                  onClick={this.handleOnClick}
                  isPositive={feedbackReaction[0].isPositive}
                /> 
              )
            })}
          </div>
          <PoweredByFooter/>
        </div>
      </div>
    )



  }
}

export default withCustomer(ReactionStep2Page);

//  dimension={feedbackReaction[0].dimension} isPositive={feedbackReaction[0].isPositive}
