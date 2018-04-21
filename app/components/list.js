// @flow

import React from 'react';
import numeral from 'numeral';
import { getAssetImage } from '../utils/images';
import Spinner from './spinner';

type Props = {
  assets: Array<*>,
  prices: object,
}

const getCurrentPrice = (prices, currency) => prices[currency];

const getListItems = (asset, prices) => (
  <li className='list__item'>
    <div className='list__item__info'>
      <img
        src={getAssetImage(asset.currency)}
        alt={`${asset.currency}`}
        className='list__item__image'
      />
      <span className='list__item__name'>
        {asset.currency}
      </span>
    </div>
    <div className='list__item__price'>
      <div>
        {numeral(asset.marketCap).format('$ 0.00 a')}
      </div>
      <div>
        {numeral(getCurrentPrice(prices, asset.currency)).format('$0,0.00')}
      </div>
    </div>
  </li>
);

export default (props: Props) => (
  <ul className='list'>
    {
      props.assets.length ?
        props.assets.map(asset => getListItems(asset, props.prices)) :
        <Spinner isFullBleed />
    }
  </ul>
);
