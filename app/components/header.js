import React from 'react';
import AddIcon from 'react-icons/lib/io/android-add';
import SyncIcon from 'react-icons/lib/io/android-sync';
import { Link } from 'react-router-dom';

export default () => (
  <div className='header'>
    <Link
      className='header__icon'
      to='/add'
    >
      <AddIcon />
    </Link>
    <div className='header__title'>mono tray</div>
    <div className='header__icon'>
      <SyncIcon />
    </div>
  </div>
);
