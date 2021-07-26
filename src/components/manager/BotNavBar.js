import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ChartBarIcon, BookOpenIcon, CogIcon } from '@heroicons/react/outline'

class BotNavBar extends Component {

	render() {
		const { activeTab } = this.props;
		const linkClassName = "flex-1 flex flex-col items-center text-xs ";
		const iconClassName = "w-8 h-8 ";
		const activeTabStyle = "text-yellow-800 font-semibold";
		const inactiveTabStyle = "text-gray-600 font-extralight";

		const dashboardClassName = ( activeTab === "dashboard" ? activeTabStyle : inactiveTabStyle );
		const menuClassName = ( activeTab === "set-menu" ? activeTabStyle : inactiveTabStyle );
		const settingsClassName = ( this.props.activeTab === "settings" ? activeTabStyle : inactiveTabStyle );

		return (
			<div className="bg-white fixed border-t border-gray-800 bottom-0 inset-x-0 flex py-2 ">
				<Link className={linkClassName} to='/dashboard' >
					<ChartBarIcon className={iconClassName}  />
					<div className={dashboardClassName}>Dashboard</div>
				</Link>
				<Link className={linkClassName} to='/set-menu' >
					<BookOpenIcon className={iconClassName}  />
					<div className={menuClassName}>Menu</div>
				</Link>
				<Link className={linkClassName} to='/settings' >
					<CogIcon className={iconClassName}  />
					<div className={settingsClassName}>Ajustes</div>
				</Link>
			</div>
		);
	}
}

export default BotNavBar;
