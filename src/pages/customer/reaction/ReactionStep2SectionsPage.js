import React, { Component } from "react";

import { withCustomer } from "../../../providers/CustomerProvider";
import reactionsTemplate from '../../../reactionsTemplate.json';
import ReactionStep2HeaderBuilder from "../../../components/customer/reaction/ReactionStep2HeaderBuilder";
import BackBtn from "../../../components/BackBtn";
import PoweredByFooter from '../../../components/customer/PoweredByFooter';
import PageHeader from "../../../components/customer/PageHeader";
import PageSubheader from "../../../components/customer/PageSubheader";
import SectionBtn from "../../../components/customer/menu/SectionBtn";

class ReactionStep2SectionsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sections: [],
    }
  }

  componentDidMount() {
    const { menu } = this.props.location.state;
    const { sections } = this.props.contextData;
    const filteredSections = sections.filter( (element) => { return element.menuId === menu._id });
    this.setState({
      sections: filteredSections,
    })
  }

  handleOnClick = (index) => {
    const { reaction } = this.props.location.state;
    const { sections } = this.props.contextData;
    this.props.history.push({pathname: "/restaurant/reaction-items", state: { section: sections[index], reaction }});
  }

  render() {

    const { reaction } = this.props.location.state;
    const feedbackReaction = reactionsTemplate.filter( (element) => element.dimension === reaction.dimension && element.isPositive === reaction.isPositive);
    const { sections } = this.state;

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
              name={"Ahora selecciona el tipo de plato..."}
            />
          </div>
          <div className="flex flex-col items-center text-3xl font-normal text-yellow-700 mb-28 " >
            <div className="flex flex-col items-center text-3xl font-normal text-yellow-700" >
              {sections.map((section, index) => {
                return (
                  <SectionBtn 
                    key={index}
                    title={section.name}
                    onClick={this.handleOnClick}
                    index={index}
                  />
                )
              })}
            </div>
          </div>
          <PoweredByFooter/>
      </div>
    )
  }
}

export default withCustomer(ReactionStep2SectionsPage);
