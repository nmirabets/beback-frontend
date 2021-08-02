import React, { Component } from "react";

import { withCustomer } from "../../../providers/CustomerProvider";
import PoweredByFooter from "../../../components/customer/PoweredByFooter";
import PageHeader from "../../../components/customer/PageHeader";
import BackBtn from "../../../components/BackBtn";
import SectionBtn from "../../../components/customer/menu/SectionBtn";

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
      <div className="flex flex-col h-screen bg-gray-200" >
        <div className="flex flex-col items-center justify-between mx-auto h-full" >
        <div className="w-screen">
          <BackBtn title="Atrás" onClick={this.props.history.goBack} />
          <PageHeader 
            name={menu.name}
            style={"text-5xl"}
          />
        </div>
          <div className="flex flex-col items-center text-3xl font-normal text-yellow-700 " >
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
          <PoweredByFooter/>
        </div>
      </div>
    );
  }
}

export default withCustomer(MenuSectionsPage);
