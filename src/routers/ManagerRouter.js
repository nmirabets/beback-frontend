import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import DashboardPage from '../pages/manager/dashboard/DashboardPage';

import MenuListPage from '../pages/manager/menu/list/MenuListPage';
import MenuListEditPage from '../pages/manager/menu/list/MenuListEditPage';
import MenuEditVisibilityPage from '../pages/manager/menu/list/MenuListEditVisibilityPage';
import MenuDetailEditPage from '../pages/manager/menu/list/MenuDetailEditPage';

import SectionListPage from '../pages/manager/menu/sections/SectionListPage';
import SectionListEditPage from '../pages/manager/menu/sections/SectionListEditPage';
import SectionDetailEditPage from '../pages/manager/menu/sections/SectionDetailEditPage';

import ItemListPage from '../pages/manager/menu/items/ItemListPage';
import ItemListEditPage from '../pages/manager/menu/items/ItemListEditPage';
import ItemDetailEditPage from '../pages/manager/menu/items/ItemDetailEditPage';

import SettingsPage from '../pages/manager/settings/SettingsPage';
import RestaurantSelectionPage from '../pages/manager/settings/RestaurantSelectionPage';
import RestaurantDetailEditPage from '../pages/manager/settings/RestaurantDetailEditPage';
import RestaurantEditPage from '../pages/manager/settings/RestaurantEditPage';

import NotFoundPage from '../pages/website/NotFound';
import ManagerProvider from '../providers/ManagerProvider';


function ManagerRouter() {
  const { url } = useRouteMatch();
  return (
    <ManagerProvider>
      <Switch>
        <Route path={`${url}/dashboard`} component={DashboardPage} />

        <Route path={`${url}/menu/menu-edit-visibility`} component={MenuEditVisibilityPage} />
        <Route path={`${url}/menu/menu-edit-detail`} component={MenuDetailEditPage} />
        <Route path={`${url}/menu/menu-edit`} component={MenuListEditPage} />
        <Route path={`${url}/menu/list`} component={MenuListPage} />

        <Route path={`${url}/menu/sections-edit-detail`} component={SectionDetailEditPage} />
        <Route path={`${url}/menu/sections-edit`} component={SectionListEditPage} />
        <Route path={`${url}/menu/sections`} component={SectionListPage} />

        <Route path={`${url}/menu/items-edit-detail`} component={ItemDetailEditPage} />
        <Route path={`${url}/menu/items-edit`} component={ItemListEditPage} />
        <Route path={`${url}/menu/items`} component={ItemListPage} />

        <Route path={`${url}/settings/restaurant-selection`} component={RestaurantSelectionPage} />
        <Route path={`${url}/settings/restaurant-edit-detail`} component={RestaurantDetailEditPage} />
        <Route path={`${url}/settings/restaurant-edit`} component={RestaurantEditPage} />
        <Route path={`${url}/settings`} component={SettingsPage} />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </ManagerProvider>
  );
}

export default ManagerRouter;