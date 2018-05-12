// @flow

import React, { PureComponent } from 'react';
import numeral from 'numeral';
import cx from 'classnames';
import { getAssetImage } from '../utils/images';
import Spinner from './spinner';
import type { DashboardType, DashboardItemType } from '../types/dashboard';
import type { LoadingType } from '../types/loading';
import type { PricesType } from '../types/prices';
import { formatAmount, formatLargeAmount } from '../utils/currency';

type Props = {
  // Router
  history?: Object,

  // Data
  assets: DashboardType,
  loading: LoadingType,
  prices: PricesType,
}

export default class List extends PureComponent<Props> {
  getCurrentPrice = (prices: PricesType, currency: string) => prices[currency];
  getCurrentDelta = (prices: PricesType, asset: DashboardItemType) => {
    const openPrice = Number(asset.dayOpen) || 0;
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

  getListItems = (asset: any, prices: any) => {
    const { currency, marketCap } = asset;

    const currentPrice = this.getCurrentPrice(prices, currency);

    return (
      <button
        key={currency}
        className='list__item'
        onClick={() => this.handleClick(currency)}
      >
        <div className='list__item__info'>
          <img
            src={getAssetImage(currency)}
            alt={`${currency}`}
            className='list__item__image'
          />
          <span className='list__item__name'>
            {currency}
          </span>
        </div>
        {this.getCurrentDelta(prices, asset)}
        <div className='list__item__content'>
          <div className='list__item__price'>
            {formatAmount(currentPrice)}
          </div>
          <div className='list__item__marketcap'>
            {formatLargeAmount(marketCap)}
          </div>
        </div>
      </button>
    );
  }

  handleClick = (currency: string) => {
    const { history } = this.props;

    // $FlowFixMe
    history.push({ pathname: `/asset/${currency}` });
  }

  render() {
    const { loading, assets, prices } = this.props;

    return (
      <div className='list'>
        {
          !loading.status ?
            assets.map(asset => this.getListItems(asset, prices)) :
            <Spinner isFullBleed />
        }
      </div>
    );
  }
}
