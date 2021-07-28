import React from 'react';
import { Link } from 'react-router-dom';

import { ChartBarIcon, BookOpenIcon, CogIcon } from '@heroicons/react/outline'

function BotNavBar(props) {

		const { activeTab } = props;
		const linkClassName = "flex-1 flex flex-col items-center text-xs ";
		const iconClassName = "w-8 h-8 ";
		const activeTabStyle = "text-yellow-800 font-semibold";
		const inactiveTabStyle = "text-gray-600 font-extralight";

		const dashboardClassName = ( activeTab === "dashboard" ? activeTabStyle : inactiveTabStyle );
		const menuClassName = ( activeTab === "menu" ? activeTabStyle : inactiveTabStyle );
		const settingsClassName = ( props.activeTab === "settings" ? activeTabStyle : inactiveTabStyle );

	return (
			<div className="bg-white fixed border-t border-gray-800 bottom-0 inset-x-0 flex py-2 ">
				<Link className={linkClassName} to='/manager/dashboard' >
					<ChartBarIcon className={iconClassName}  />
					<div className={dashboardClassName}>Dashboard</div>
				</Link>
				<Link className={linkClassName} to='/manager/menu/list' >
					<BookOpenIcon className={iconClassName}  />
					<div className={menuClassName}>Menú</div>
				</Link>
				<Link className={linkClassName} to='/manager/settings' >
					<CogIcon className={iconClassName}  />
					<div className={settingsClassName}>Ajustes</div>
				</Link>
			</div>
	);
}

export default BotNavBar;
