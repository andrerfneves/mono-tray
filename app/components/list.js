// @flow

import React from 'react';
import numeral from 'numeral';
import cx from 'classnames';
import { getAssetImage } from '../utils/images';
import Spinner from './spinner';

type Props = {
  assets: Array<*>,
  prices: Array<*>,
  loading: Object,
}

const getCurrentPrice = (prices, currency) => prices[currency];
const getCurrentDelta = (prices, asset) => {
  const openPrice = asset.dayOpen || 0;
  const currentPrice = prices[asset.currency] || 0;
  const delta = (currentPrice / openPrice) - 1;
  const isNegative = delta < 0;
  const sign = isNegative ? '-' : '+';
  const value = isNegative ? delta.toString().split('-')[1] : delta;
  const classnames = cx({
    list__item__delta: true,
    'list__item__delta--down': delta < 0,
    'list__item__delta--up': delta > 0,
  });

  return (
    <div className={classnames}>
      {sign}{numeral(Number(value)).format('0.00%')}
    </div>
  );
};

const getListItems = (asset, prices) => (
  <li
    key={asset.currency}
    className='list__item'
  >
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
    {getCurrentDelta(prices, asset)}
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
      !props.loading.status ?
        props.assets.map(asset => getListItems(asset, props.prices)) :
        <Spinner isFullBleed />
    }
  </ul>
);
