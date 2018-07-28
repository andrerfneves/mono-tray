// @flow

import React from 'react';
import { NavLink } from 'react-router-dom';
import { ALL_MARKETS_ROUTE, HOME_ROUTE } from '../constants/routes';

export default () => (
  <div className='menu'>
    <NavLink
      to={ALL_MARKETS_ROUTE}
      activeClassName='menu__option--active'
      exact
    >
      <div className='menu__option'>
        All Markets
      </div>
    </NavLink>
    <NavLink
      to={HOME_ROUTE}
      activeClassName='menu__option--active'
      exact
    >
      <div className='menu__option'>
        Favorites
      </div>
    </NavLink>
  </div>
);
