// @flow

import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from './authenticated-route';

import FavoritesContainer from '../containers/favorites';
import AllMarketsContainer from '../containers/all-markets';
import AddFavoriteContainer from '../containers/add-favorite';
import SingleAssetContainer from '../containers/single-asset';
import SettingsContainer from '../containers/settings';
import LoginContainer from '../containers/login';
import FooterContainer from '../containers/footer';
import Header from '../components/header';
import MenuContainer from '../containers/menu';
import NotFoundView from '../views/not-found';

import {
  ALL_MARKETS_ROUTE,
  ALL_FAVORITES_ROUTE,
  ADD_FAVORITES_ROUTE,
  SETTINGS_ROUTE,
  LOGIN_ROUTE,
  SINGLE_ASSET_ROUTE,
} from '../constants/routes';

export default () => (
  <div className='mono'>
    <Header />
    <MenuContainer />
    <Fragment>
      <Switch>
        <Route
          path={ALL_MARKETS_ROUTE}
          exact
          component={AllMarketsContainer}
        />
        <Route
          path={LOGIN_ROUTE}
          component={LoginContainer}
        />
        <Route
          path={`${SINGLE_ASSET_ROUTE}/:currency`}
          component={SingleAssetContainer}
        />
        <AuthenticatedRoute
          path={ALL_FAVORITES_ROUTE}
          component={FavoritesContainer}
        />
        <AuthenticatedRoute
          path={ADD_FAVORITES_ROUTE}
          component={AddFavoriteContainer}
        />
        <AuthenticatedRoute
          path={SETTINGS_ROUTE}
          component={SettingsContainer}
        />
        <Route component={NotFoundView} />
      </Switch>
    </Fragment>
    <FooterContainer />
  </div>
);
