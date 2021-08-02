import React, { Component } from "react";

import { withCustomer } from "../../../providers/CustomerProvider";
import PoweredByFooter from "../../../components/customer/PoweredByFooter";
import BackBtn from "../../../components/BackBtn";
import PageHeader from "../../../components/customer/PageHeader";
import MenuItemComp from "../../../components/customer/menu/MenuItemComp";

class MenuItemsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      section: {},
			items: [],
    }
  }

	componentDidMount() {
		const { items } = this.props.contextData;
    const { section } = this.props.location.state;
    const filteredItems = items.filter( (element) => { return element.sectionId === section._id });
    this.setState({
      items: filteredItems,
      section,
    })
  }


  render() {
    const { section, items } = this.state;

    return (
      <div className="flex flex-col h-screen bg-gray-200" >
        <div className="flex flex-col items-center justify-between mx-auto h-full" >
        <div className="w-screen">
          <BackBtn 
            title="Atrás"
            onClick={this.props.history.goBack}
          />
          <PageHeader 
            name={section.name}
            style={"text-5xl"}
          />
        </div>
          <div className="flex flex-col w-full" >
            {items.map((item, index) => {
              return (
                <MenuItemComp 
                  key={index}
                  item={item}
                  index={index}
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

export default withCustomer(MenuItemsPage);
