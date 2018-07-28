// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import AddIcon from 'react-icons/lib/io/android-add';
import SearchIcon from 'react-icons/lib/io/android-search';
import { ADD_FAVORITES_ROUTE, LOGIN_ROUTE } from '../constants/routes';

export default () => (
  <div className='header'>
    <Link
      className='header__icon'
      to={ADD_FAVORITES_ROUTE}
    >
      <AddIcon />
    </Link>
    <div className='header__title'>mono tray</div>
    <Link
      className='header__icon'
      to={LOGIN_ROUTE}
    >
      <SearchIcon />
    </Link>
  </div>
);
