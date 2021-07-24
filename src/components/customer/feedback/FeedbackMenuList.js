import React, { Component } from 'react';

class FeedbackMenuList extends Component {

  handleClick = (e) => {
    this.props.onClick(e.target.name)
  }

	render() {
		const { menu, sections, items } = this.props.data;
    console.log(this.props.data);
		return (
        <div>
					<h1>{menu.name}</h1>
          {sections.map((section, index) => {
            return(
              <div key={index} >
                <h2>{section.name}</h2>
                <div>
                  {items.filter((item) => item.sectionId === section._id).map((item, index) => {
                    return(
                      <div key={index} >
                        {item.name}
                        <button onClick={this.handleClick} name={item.name} >Thumbs up/down</button>
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

export default FeedbackMenuList;
