// @flow

import React, { PureComponent, Fragment } from 'react';
import Spinner from '../components/spinner';
import type { DashboardType } from '../types/dashboard';
import type { PricesType } from '../types/prices';
import type { LoadingType } from '../types/loading';
import type { AssetType } from '../types/asset';
import { getAssetImage } from '../utils/images';
import { formatAmount, formatLargeAmount } from '../utils/currency';
// import { getAssetImage } from '../utils/images';

type Props = {
  // Router
  match: Object,

  // Data
  dashboard: DashboardType,
  loading: LoadingType,
  prices: PricesType,
};

export default class AssetView extends PureComponent<Props> {
  renderDaily = (asset: AssetType) => {
    const { data } = asset;

    return (
      <div className='asset__section'>
        <div className='asset__section-title'>daily info</div>
        <ul className='asset__list'>
          <li className='asset__list-item'>day open: {data.dayOpen}</li>
          <li className='asset__list-item'>day volume: {data.dayVolume}</li>
          <li className='asset__list-item'>day OpenVolume: {data.dayOpenVolume}</li>
          <li className='asset__list-item'>day close: {data.close}</li>
        </ul>
      </div>
    );
  }

  renderWeekly = (asset: AssetType) => {
    const { data } = asset;

    return (
      <div className='asset__section'>
        <div className='asset__section-title'>weekly info</div>
        <ul className='asset__list'>
          <li className='asset__list-item'>week open: {data.weekOpen}</li>
          <li className='asset__list-item'>week volume: {data.weekVolume}</li>
          <li className='asset__list-item'>week OpenVolume: {data.weekOpenVolume}</li>
        </ul>
      </div>
    );
  }

  renderMonthly = (asset: AssetType) => {
    const { data } = asset;

    return (
      <div className='asset__section'>
        <div className='asset__section-title'>monthly info</div>
        <ul className='asset__list'>
          <li className='asset__list-item'>month open: {data.monthOpen}</li>
          <li className='asset__list-item'>month volume: {data.monthVolume}</li>
          <li className='asset__list-item'>month OpenVolume: {data.monthOpenVolume}</li>
        </ul>
      </div>
    );
  }

  renderYearly = (asset: AssetType) => {
    const { data } = asset;

    return (
      <div className='asset__section'>
        <div className='asset__section-title'>yearly info</div>
        <ul className='asset__list'>
          <li className='asset__list-item'>year open: {data.yearOpen}</li>
          <li className='asset__list-item'>year volume: {data.yearVolume}</li>
          <li className='asset__list-item'>year OpenVolume: {data.yearOpenVolume}</li>
        </ul>
      </div>
    );
  }

  renderATH = (asset: AssetType) => {
    const { data } = asset;

    return (
      <div className='asset__section'>
        <div className='asset__section-title'>All Time High</div>
        <ul className='asset__list'>
          <li className='asset__list-item'>ath price: {data.high}</li>
          <li className='asset__list-item'>ath date: {data.highTimestamp}</li>
          <li className='asset__list-item'>ath exchange: {data.highExchange}</li>
        </ul>
      </div>
    );
  }

  renderGeneralInfo = (asset: AssetType) => {
    const { data, price } = asset;

    return (
      <Fragment>
        <div className='asset__header'>
          <div className='asset__image-wrapper'>
            <img
              src={getAssetImage(data.currency)}
              alt={`${data.currency}`}
              className='asset__image'
            />
          </div>
          <div className='asset__header-content'>
            <div className='asset__price'>
              {formatAmount(price)}
            </div>
            <div className='asset__delta'>
              {price}
            </div>
          </div>
        </div>
        <div className='asset__header-additional'>
          <div className='asset__additional-item'>
            <div className='asset__additional-item-label'>Supply</div>
            <div className='asset__additional-item-content'>
              {data.availableSupply}/{data.maxSupply}
            </div>
          </div>
          <div className='asset__additional-item'>
            <div className='asset__additional-item-label'>Market Cap</div>
            <div className='asset__additional-item-content'>
              {formatLargeAmount(data.marketCap)}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

  render() {
    const {
      match: { params },
      dashboard,
      prices,
      loading: { status },
    } = this.props;
    const assetData = dashboard.find(asset => asset.currency === params.id) || {};
    const assetPrice = prices[params.id] || '------';

    const asset = {
      data: assetData,
      price: assetPrice,
    };

    if (status) return <Spinner isFullBleed />;

    return (
      <div className='asset'>
        <div className='asset__content'>
          {this.renderGeneralInfo(asset)}
          {this.renderATH(asset)}
          {this.renderDaily(asset)}
          {this.renderWeekly(asset)}
          {this.renderMonthly(asset)}
          {this.renderYearly(asset)}
        </div>
      </div>
    );
  }
}

