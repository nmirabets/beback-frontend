import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import LandingPage from '../pages/customer/LandingPage';
import MenuSectionsPage from '../pages/customer/MenuSectionsPage';
import MenuItemsPage from '../pages/customer/MenuItemsPage';
import ReactionStep1Page from '../pages/customer/ReactionStep1Page';
import ReactionStep2Page from '../pages/customer/ReactionStep2Page';
import ReactionStep2FoodPage from '../pages/customer/ReactionStep2FoodPage';
import ReactionThankyouPage from '../pages/customer/ReactionThankyouPage';
import NotFoundPage from '../pages/NotFound';
import CustomerProvider from '../providers/CustomerProvider';

function CustomerRouter() {
  const { url } = useRouteMatch();
  return (
    <CustomerProvider>
      <Switch>
        <Route path={`${url}/menu-items`} component={MenuItemsPage} />
        <Route path={`${url}/menu-sections`} component={MenuSectionsPage} />
        
        <Route path={`${url}/reaction-start`} component={ReactionStep1Page} />
        <Route path={`${url}/reaction-rest`} component={ReactionStep2Page} />
        <Route path={`${url}/reaction-food`} component={ReactionStep2FoodPage} />
        <Route path={`${url}/reaction-end`} component={ReactionThankyouPage} />

        <Route exact path={url} component={LandingPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </CustomerProvider>
  );
}

export default CustomerRouter;