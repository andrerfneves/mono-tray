// @flow

import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import FavoritesContainer from '../containers/favorites';
import AllMarketsContainer from '../containers/all-markets';
import AddFavoriteContainer from '../containers/add-favorite';
import SettingsContainer from '../containers/settings';
import LoginContainer from '../containers/login';
import Footer from '../containers/footer';
import Header from '../components/header';
import Menu from '../components/menu';
import NotFoundView from '../views/not-found';
import {
  HOME_ROUTE,
  ALL_MARKETS_ROUTE,
  ADD_FAVORITES_ROUTE,
  SETTINGS_ROUTE,
  LOGIN_ROUTE,
} from '../constants/routes';

export default () => (
  <div className='mono'>
    <Header />
    <Menu />
    <Fragment>
      <Switch>
        <Route
          path={HOME_ROUTE}
          exact
          component={FavoritesContainer}
        />
        <Route
          path={LOGIN_ROUTE}
          component={LoginContainer}
        />
        <Route
          path={ALL_MARKETS_ROUTE}
          component={AllMarketsContainer}
        />
        <Route
          path={ADD_FAVORITES_ROUTE}
          component={AddFavoriteContainer}
        />
        <Route
          path={SETTINGS_ROUTE}
          component={SettingsContainer}
        />
        <Route component={NotFoundView} />
      </Switch>
    </Fragment>
    <Footer />
  </div>
);
