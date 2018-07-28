// @flow

import React, { PureComponent } from 'react';
import numeral from 'numeral';
import cx from 'classnames';
import Spinner from './spinner';
import { getAssetImage } from '../utils/images';
import { getAssetDelta } from '../utils/delta';

type Props = {
  assets: Array<*>,
  prices: Object,
  loading: Object,
}

export default class extends PureComponent<Props> {
  getCurrentMarketCap = (marketCap: number) => numeral(marketCap).format('$ 0.00 a');
  getCurrentPrice = (currency: string) => {
    const { prices } = this.props;
    return numeral(prices[currency]).format('$0,0.00');
  };

  renderCurrentDelta = (asset: Object) => {
    const { prices } = this.props;
    const { delta, sign, value } = getAssetDelta(asset, prices);

    const classnames = cx({
      'list__item-delta': true,
      'list__item-delta--down': delta < 0,
      'list__item-delta--up': delta > 0,
    });

    return (
      <div className={classnames}>
        {sign}{value}
      </div>
    );
  };

  renderListItems = (asset: Object) => {
    const { currency, marketCap } = asset;

    const assetName = `${currency}`;
    const assetImageSrc = getAssetImage(currency);
    const assetMarketCap = this.getCurrentMarketCap(marketCap);
    const assetPrice = this.getCurrentPrice(currency);

    return (
      <li
        key={currency}
        className='list__item'
      >
        <div className='list__item-content'>
          <img
            src={assetImageSrc}
            alt={assetName}
            className='list__item-image'
          />
          <span className='list__item-name'>
            {assetName}
          </span>
        </div>
        {this.renderCurrentDelta(asset)}
        <div className='list__item-info'>
          <div className='list__item-price'>
            {assetPrice}
          </div>
          <div className='list__item-marketcap'>
            {assetMarketCap}
          </div>
        </div>
      </li>
    );
  };

  render() {
    const { assets, loading: { status: loadingStatus } } = this.props;
    return (
      <ul className='list'>
        {!loadingStatus ?
          assets.map(asset => this.renderListItems(asset)) :
          <Spinner isFullBleed />
        }
      </ul>
    );
  }
}
