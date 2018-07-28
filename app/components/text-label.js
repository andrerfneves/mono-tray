// @flow

import React from 'react';

type Props = {
  label: string,
  value: string,
};

export default (props: Props) => (
  <div className='text-label'>
    <div className='text-label__label'>
      {props.label}
    </div>
    <div className='text-label__value'>
      {props.value}
    </div>
  </div>
);

