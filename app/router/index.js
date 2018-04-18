import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DashboardContainer from '../containers/dashboard';
import AboutView from '../views/about';
import NotFoundView from '../views/not-found';

export default () => (
  <div className='mono'>
    <Switch>
      <Route path='/' exact component={DashboardContainer} />
      <Route path='/about' component={AboutView} />
      <Route component={NotFoundView} />
    </Switch>
  </div>
);
