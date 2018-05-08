// @flow

import React from 'react';

export default ({ match: { params } }: Object) => (
  <div className='asset'>
    <div className='settings__header'>
      Asset
    </div>
    <div className='settings__description'>
      {params.id}
    </div>
    <div className='settings__input'>
      <input type='text' />
    </div>
  </div>
);
