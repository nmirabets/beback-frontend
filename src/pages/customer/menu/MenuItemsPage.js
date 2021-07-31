import React, { Component } from "react";

import { withCustomer } from "../../../providers/CustomerProvider";
import PoweredByFooter from "../../../components/customer/PoweredByFooter";
import BackBtn from "../../../components/BackBtn";
import PageHeader from "../../../components/customer/PageHeader";

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
      <div>
        <BackBtn title="Atrás" onClick={this.props.history.goBack} />
        <PageHeader name={section.name} />
        {items.map((item, index) => {
          return(
            <div key={index} >
              {item.name}
            </div>
          )
        })}
        <PoweredByFooter />
      </div>
    )
  }
}

export default withCustomer(MenuItemsPage);
