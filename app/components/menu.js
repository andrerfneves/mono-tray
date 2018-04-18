import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <div className='menu'>
    <NavLink
      to='/'
      activeClassName='menu__option--active'
      exact
    >
      <div className='menu__option'>
        Favorites
      </div>
    </NavLink>
    <NavLink
      to='/all'
      activeClassName='menu__option--active'
      exact
    >
      <div className='menu__option'>
        All Markets
      </div>
    </NavLink>
  </div>
);