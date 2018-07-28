// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import SyncIcon from 'react-icons/lib/io/android-sync';
import MenuIcon from 'react-icons/lib/io/android-menu';
import { SETTINGS_ROUTE } from '../constants/routes';

type Props = {
  dataRefresh: Function,
};

export default (props: Props) => (
  <div className='footer'>
    <button
      onClick={() => props.dataRefresh()}
      className='footer__icon'
    >
      <SyncIcon />
    </button>
    <Link
      className='footer__icon'
      to={SETTINGS_ROUTE}
    >
      <MenuIcon />
    </Link>
  </div>
);
