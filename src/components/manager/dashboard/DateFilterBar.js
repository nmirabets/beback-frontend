import React, { Component } from 'react';

class DateFilterBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: "d",
  };
  }

	handleOnClick = (e) => {

		this.props.onClick(e.target.name)

		this.setState({
			activeTab: e.target.name,
		})

	}

	render() {

		const { activeTab } = this.state;
	
		const activeTabStyle = "flex-1 items-center text-secondary-dark text-s font-medium";
		const inactiveTabStyle = "flex-1 items-center text-gray-600 text-s font-extralight";

		const dayClassName = ( activeTab ==="d" ? activeTabStyle : inactiveTabStyle );
		const weekClassName = ( activeTab ==="w" ? activeTabStyle : inactiveTabStyle );
		const monthClassName = ( activeTab ==="m" ? activeTabStyle : inactiveTabStyle );
		const yearClassName = ( activeTab ==="y" ? activeTabStyle : inactiveTabStyle );

		return (
			<div className="flex fixed bg-white border rounded-xl border-gray-800 bottom-10 inset-x-5 py-2 mb-10">
				<button name="d"className={dayClassName} onClick={this.handleOnClick}>día</button>
				<button name="w" className={weekClassName} onClick={this.handleOnClick}>semana</button>
				<button name="m" className={monthClassName} onClick={this.handleOnClick}>mes</button>
				<button name="y" className={yearClassName} onClick={this.handleOnClick}>año</button>
			</div>
		);
	}
}

export default DateFilterBar;
