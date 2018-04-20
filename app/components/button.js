// @flow

import React from 'react';

type Props = {
  label: string,
  onClick: Function,
}

export default (props: Props) => (
  <button
    className='button'
    onClick={props.onClick}
  >
    {props.label}
  </button>
);
