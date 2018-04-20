// @flow

import React from 'react';
import numeral from 'numeral';
import { getAssetImage } from '../utils/images';
import Spinner from './spinner';

type Props = {
  assets: Array<*>,
}

const getListItems = asset => (
  <li className='list__item'>
    <div className='list__item__info'>
      <img
        src={getAssetImage(asset.currency)}
        alt='Bitcoin'
        className='list__item__image'
      />
      <span className='list__item__name'>
        {asset.currency}
      </span>
    </div>
    <div className='list__item__price'>
      {numeral(asset.marketCap).format('$ 0.00 a')}
    </div>
  </li>
);

export default (props: Props) => (
  <ul className='list'>
    {
      props.assets.length ?
        props.assets.map(asset => getListItems(asset)) :
        <Spinner isFullBleed />
    }
  </ul>
);
