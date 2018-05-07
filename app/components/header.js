import React from 'react';
import AddIcon from 'react-icons/lib/io/android-add';
import SearchIcon from 'react-icons/lib/io/android-search';
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
    <Link
      className='header__icon'
      to='/login'
    >
      <SearchIcon />
    </Link>
  </div>
);
