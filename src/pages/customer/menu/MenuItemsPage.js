import React, { Component } from "react";

import { withCustomer } from "../../../providers/CustomerProvider";
import PoweredByFooter from "../../../components/customer/PoweredByFooter";
import BackBtn from "../../../components/BackBtn";
import PageHeader from "../../../components/customer/PageHeader";
import MenuItemComp from "../../../components/customer/menu/MenuItemComp";
import Spacing from "../../../components/Spacing";

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
      <div className="flex flex-col " >
        <div className="flex flex-col items-center mx-auto" >
          <div className="w-screen fixed inset-x-0 bg-white">
            <div className="m-2">
              <BackBtn
                onClick={this.props.history.goBack}
              />
            </div>
            <PageHeader 
              name={section.name}
              style={"text-3xl"}
            />
          </div>
          <Spacing />
          <Spacing />
          <div className="flex flex-col justify-items-start w-screen px-4" >
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
          <Spacing />
          <PoweredByFooter/>
        </div>
      </div>
    )
  }
}

export default withCustomer(MenuItemsPage);
