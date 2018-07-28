// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from 'react-icons/lib/io/android-home';
import MenuIcon from 'react-icons/lib/io/android-menu';
import {
  ALL_MARKETS_ROUTE,
  SETTINGS_ROUTE,
} from '../constants/routes';

export default () => (
  <div className='header'>
    <Link
      className='header__icon'
      to={ALL_MARKETS_ROUTE}
    >
      <HomeIcon />
    </Link>
    <div className='header__title'>mono tray</div>
    <Link
      className='header__icon'
      to={SETTINGS_ROUTE}
    >
      <MenuIcon />
    </Link>
  </div>
);
