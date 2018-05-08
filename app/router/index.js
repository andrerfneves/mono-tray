// @flow

import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

// Routes
import AddFavoriteContainer from '../containers/add-favorite';
import AllMarketsContainer from '../containers/all-markets';
import AssetContainer from '../containers/asset';
import FavoritesContainer from '../containers/favorites';
import LoginContainer from '../containers/login';
import NotFoundView from '../views/not-found';
import SettingsContainer from '../containers/settings';

// Main Components
import Footer from '../containers/footer';
import Header from '../components/header';
import Menu from '../components/menu';

// Transition Specs
const inactiveRouteTransition = { opacity: 0.1 };
const activeRouteTransition = { opacity: 1 };

export default () => (
  <div className='mono'>
    <Header />
    <Menu />
    <Fragment>
      <AnimatedSwitch
        atEnter={inactiveRouteTransition}
        atLeave={inactiveRouteTransition}
        atActive={activeRouteTransition}
        className='mono-router-wrapper'
      >
        <Route path='/' exact component={FavoritesContainer} />
        <Route path='/login' component={LoginContainer} />
        <Route path='/all' component={AllMarketsContainer} />
        <Route path='/add' component={AddFavoriteContainer} />
        <Route path='/asset/:id' component={AssetContainer} />
        <Route path='/settings' component={SettingsContainer} />
        <Route component={NotFoundView} />
      </AnimatedSwitch>
    </Fragment>
    <Footer />
  </div>
);
