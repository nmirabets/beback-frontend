import React, { Component } from 'react';

class DateFilterBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: "day",
  };
  }


	handleOnClick = (e) => {
		this.setState({
			activeTab: e.target.name,
		})
	}

	render() {

		const { activeTab } = this.state;
	
		const activeTabStyle = "flex-1 items-center text-yellow-800 text-s font-medium";
		const inactiveTabStyle = "flex-1 items-center text-gray-600 text-s font-extralight";

		const dayClassName = ( activeTab ==="day" ? activeTabStyle : inactiveTabStyle );
		const weekClassName = ( activeTab ==="week" ? activeTabStyle : inactiveTabStyle );
		const monthClassName = ( activeTab ==="month" ? activeTabStyle : inactiveTabStyle );
		const yearClassName = ( activeTab ==="year" ? activeTabStyle : inactiveTabStyle );

		return (
			<div className="flex fixed bg-white border rounded-xl border-gray-800 bottom-10 inset-x-5 py-2 mb-10">
				<button name="day"className={dayClassName} onClick={this.handleOnClick}>día</button>
				<button name="week" className={weekClassName} onClick={this.handleOnClick}>semana</button>
				<button name="month" className={monthClassName} onClick={this.handleOnClick}>mes</button>
				<button name="year" className={yearClassName} onClick={this.handleOnClick}>año</button>
			</div>
		);
	}
}

export default DateFilterBar;
