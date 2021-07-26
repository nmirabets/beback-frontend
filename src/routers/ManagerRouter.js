import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import DashboardPage from '../pages/manager/dashboard/DashboardPage';
import AdminMenuPage from '../pages/manager/menu/SetMenus';
import SettingsPage from '../pages/manager/settings/SettingsPage';

import NotFoundPage from '../pages/NotFound';
import ManagerProvider from '../providers/ManagerProvider';

function ManagerRouter() {
  const { url } = useRouteMatch();
  return (
    <ManagerProvider>
      <Switch>
        <Route path={`${url}/dashboard`} component={DashboardPage} />
        <Route path={`${url}/menu`} component={AdminMenuPage} />
        <Route path={`${url}/settings`} component={SettingsPage} />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </ManagerProvider>
  );
}

export default ManagerRouter;