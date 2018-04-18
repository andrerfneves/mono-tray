import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import FavoritesContainer from '../containers/favorites';
import AllMarketsContainer from '../containers/all-markets';
import AddFavoriteContainer from '../containers/add-favorite';
import Footer from '../components/footer';
import Header from '../components/header';
import Menu from '../components/menu';
import AboutView from '../views/about';
import NotFoundView from '../views/not-found';

export default () => (
  <div className='mono'>
    <Header />
    <Menu />
    <Fragment>
      <Switch>
        <Route path='/' exact component={FavoritesContainer} />
        <Route path='/all' component={AllMarketsContainer} />
        <Route path='/add' component={AddFavoriteContainer} />
        <Route path='/about' component={AboutView} />
        <Route component={NotFoundView} />
      </Switch>
    </Fragment>
    <Footer />
  </div>
);
