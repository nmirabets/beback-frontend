import React, { Component } from 'react';

class MenuList extends Component {

	render() {
		const { menu, sections, items } = this.props.data;
		return (
        <div>
					<h1>{menu.name}</h1>
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
		);
	}
}

export default MenuList;
