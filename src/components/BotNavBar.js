import React from 'react';
import { Link } from 'react-router-dom';
import { ChartBarIcon, BookOpenIcon, CogIcon } from '@heroicons/react/outline'

function BotNavBar(props) {
	const { activeTab } = props;
	const linkClassName = "flex-1 flex flex-col items-center text-xs ";
	const iconClassName = "w-6 h-6 ";
	const activeTabStyle = "text-secondary font-semibold";
	const inactiveTabStyle = "text-gray-600 font-extralight";

	const dashboardClassName = ( activeTab === "dashboard" ? activeTabStyle : inactiveTabStyle );
	const menuClassName = ( activeTab === "menu" ? activeTabStyle : inactiveTabStyle );
	const settingsClassName = ( props.activeTab === "settings" ? activeTabStyle : inactiveTabStyle );

	return (
			<div className="fixed border-t border-gray-800 bottom-0 inset-x-0 flex py-2 bg-white justify-between">
				<Link className={linkClassName} to='/manager/dashboard' >
					<ChartBarIcon className={iconClassName}  />
					<div className={dashboardClassName}>Dashboard</div>
				</Link>
				<Link className={linkClassName+" px-16 "} to='/manager/menu/list' >
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
