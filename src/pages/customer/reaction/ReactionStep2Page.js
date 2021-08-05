import React, { Component } from "react";

import { withCustomer } from "../../../providers/CustomerProvider";
import reactionsTemplate from '../../../reactionsTemplate.json';
import BackBtn from "../../../components/BackBtn";
import PoweredByFooter from '../../../components/customer/PoweredByFooter';
import apiClient from "../../../services/customerApiClient";
import PageHeader from "../../../components/customer/PageHeader";
import ReactionStep2Btn from "../../../components/customer/reaction/ReactionStep2Btn";
import ReactionStep2HeaderBuilder from "../../../components/customer/reaction/ReactionStep2HeaderBuilder";

class ReactionStep2Page extends Component {

  handleOnClick = async ( subdimension ) => {
    const { reaction: wipReaction } = this.props.location.state;
    const reaction = { ...wipReaction, subdimension}; 
    await apiClient.newReaction(reaction);
    this.props.history.push({ pathname: "/restaurant/reaction-end" });
  };

  render() {
      const { reaction } = this.props.location.state;
      const feedbackReaction = reactionsTemplate.filter( (element) => element.dimension === reaction.dimension && element.isPositive === reaction.isPositive);

    return (
        <div className="h-screen mx-auto" >
          <div className="m-2">
            <BackBtn
              onClick={this.props.history.goBack}
            />
          </div>
          <div className="h-1/3 flex flex-col items-center justify-center ">
            <PageHeader 
              name={
                <ReactionStep2HeaderBuilder 
                  dimension={feedbackReaction[0].dimension} isPositive={feedbackReaction[0].isPositive}
                />
              }
              style={"text-xl"}
            />
          </div>
          <div className="flex flex-col items-center" >
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
    )



  }
}

export default withCustomer(ReactionStep2Page);

//  dimension={feedbackReaction[0].dimension} isPositive={feedbackReaction[0].isPositive}
