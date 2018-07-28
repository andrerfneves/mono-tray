// @flow

import React from 'react';
import TextLabel from '../components/text-label';

type Props = {
  user: Object
};

export default (props: Props) => {
  const { user } = props;

  return (
    <div className='settings'>
      <div className='settings__header'>
        Settings
      </div>
      <div className='settings__description'>
        Manage your user preferences
      </div>
      <div className='settings__content'>
        <TextLabel
          label='Name'
          value={user.name}
        />
        <TextLabel
          label='Email'
          value={user.email}
        />
      </div>
    </div>
  );
};
