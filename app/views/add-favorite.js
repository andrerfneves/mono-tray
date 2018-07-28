// @flow

import React from 'react';
import Input from '../components/input';

export default () => (
  <div className='add-favorite'>
    <div className='add-favorite__header'>
      New Favorite Asset
    </div>
    <div className='add-favorite__description'>
      Search below to keep closer track of your favorite assets
    </div>
    <div className='add-favorite__input'>
      <Input type='text' />
    </div>
  </div>
);
