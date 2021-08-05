import React, { Component } from "react";

import { withCustomer } from "../../../providers/CustomerProvider";
import PoweredByFooter from "../../../components/customer/PoweredByFooter";
import PageHeader from "../../../components/customer/PageHeader";
import BackBtn from "../../../components/BackBtn";
import SectionBtn from "../../../components/customer/menu/SectionBtn";
import Spacing from "../../../components/Spacing";

class MenuSectionsPage extends Component {
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

  handleOnClick= (index) => {
    const { sections } = this.props.contextData;
    this.props.history.push({pathname: "/restaurant/menu-items", state: { section: sections[index] }});
  }

  render() {

    const { menu } = this.props.location.state; 
    const { sections } = this.state;

    return (
      <div className="w-screen h-screen mx-auto" >
        <div className="m-2">
          <BackBtn
            onClick={this.props.history.goBack}
          />
        </div>
        <div className="h-1/3 flex flex-col items-center justify-center" >
          <PageHeader 
            name={menu.name}
            style={"text-3xl"}
          />
        </div>
        <div className="h-1/3 flex flex-col items-center justify-around" >
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
        <Spacing />
        <PoweredByFooter/>
      </div>
    );
  }
}

export default withCustomer(MenuSectionsPage);
