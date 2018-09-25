// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { SyncIcon, AddIcon } from 'react-icons/io';
import { ADD_FAVORITES_ROUTE } from '../constants/routes';

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
      to={ADD_FAVORITES_ROUTE}
    >
      <AddIcon />
    </Link>
  </div>
);
