import React from 'react';
import AddIcon from 'react-icons/lib/io/android-add';
import SyncIcon from 'react-icons/lib/io/android-sync';

export default () => (
  <div className='header'>
    <div className='header__icon'>
      <AddIcon />
    </div>
    <div className='header__title'>mono tray</div>
    <div className='header__icon'>
      <SyncIcon />
    </div>
  </div>
);
