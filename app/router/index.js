import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import FavoritesContainer from '../containers/favorites';
import AllMarketsContainer from '../containers/all-markets';
import AddFavoriteContainer from '../containers/add-favorite';
import Footer from '../components/footer';
import Header from '../components/header';
import Menu from '../components/menu';
import AboutView from '../views/about';
import NotFoundView from '../views/not-found';
import { bounceTransition, mapStyles } from './transition';

export default () => (
  <div className='mono'>
    <Header />
    <Menu />
    <Fragment>
      <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className='mono-router-wrapper'
      >
        <Route path='/' exact component={FavoritesContainer} />
        <Route path='/all' component={AllMarketsContainer} />
        <Route path='/add' component={AddFavoriteContainer} />
        <Route path='/about' component={AboutView} />
        <Route component={NotFoundView} />
      </AnimatedSwitch>
    </Fragment>
    <Footer />
  </div>
);
