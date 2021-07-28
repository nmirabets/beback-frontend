import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '../routers/PrivateRoute';
import AnonRoute from '../routers/AnonRoute';
import SignupPage from '../pages/manager/authentication/SignupPage';
import LoginPage from '../pages/manager/authentication/LoginPage';
import HomePage from '../pages/website/HomePage';
import NotFoundPage from '../pages/website/NotFound';
import CustomerRouter from './CustomerRouter';
import ManagerRouter from './ManagerRouter';

function AppRouter() {
  return (
    <Switch>
      <Route path="/restaurant" component={CustomerRouter} />
      <PrivateRoute path="/manager" component={ManagerRouter} />

      <AnonRoute path="/signup" component={SignupPage} />
      <AnonRoute path="/login" component={LoginPage} />

      <Route exact path="/" component={HomePage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}

export default AppRouter;