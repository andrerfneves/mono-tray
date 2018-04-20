import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from 'react-icons/lib/io/android-menu';

export default () => (
  <div className='footer'>
    <div className='footer__version'>
      v0.4.0
    </div>
    <Link
      className='footer__icon'
      to='/settings'
    >
      <MenuIcon />
    </Link>
  </div>
);
