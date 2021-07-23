import React, { Component } from "react";
import apiClient from '../../services/apiClient'
import { Link } from "react-router-dom";

import PoweredByFooter from "../../components/PoweredByFooter";

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurantId: "",
      menu: {},
      sections: [],
      items: [],
  };
  }

   async componentDidMount() {
    const { restaurantId } = this.props.match.params;

    try {
      const menu = await apiClient.findActiveMenu(restaurantId);
      const sections = await apiClient.getMenuSections(menu._id);
      const items = await apiClient.getMenuItems(menu._id);

      this.setState({ 
        restaurantId: restaurantId,
        menu: menu,
        sections: sections,
        items: items 
      })
    } catch {

    }
  }

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   const { username, password } = this.state;
  //   this.props.signup({ username, password });
  // };

  // handleChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({ [name]: value });
  // };

  render() {
    const { restaurantId, menu, sections, items } = this.state;
    return (
      <>
        <header>
          <Link to={`/${restaurantId}`}> Volver</Link>
        </header>
        <h1 className="text-xl" >{menu.name}</h1>
        <div>
          {sections.map((section, index) => {
            return(
              <div key={index} >
                <h2>{section.name}</h2>
                <div>
                  {items.map((item, index) => {
                    return(
                      <div key={index} >
                        {item.name}
                      </div>
                    )
                  })}
                </div>
              </div>
              )
            })}
        </div>
        <PoweredByFooter/>
      </>
    );
  }
}

export default Menu;
