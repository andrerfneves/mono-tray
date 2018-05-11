// @flow

import React, { PureComponent } from 'react';
import Spinner from '../components/spinner';
// import { getAssetImage } from '../utils/images';

type Props = {
  match: Object,
  dashboard: Array<*>,
  prices: Object,
  loading: Object,
};

type Asset = {
  price: string,
  data: Object,
};

export default class AssetView extends PureComponent<Props> {
  renderDaily = (asset: Asset) => {
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

  renderWeekly = (asset: Asset) => {
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

  renderMonthly = (asset: Asset) => {
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

  renderYearly = (asset: Asset) => {
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

  renderATH = (asset: Asset) => {
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

  renderGeneralInfo = (asset: Asset) => {
    const { data, price } = asset;

    return (
      <div className='asset__section'>
        <div className='asset__section-title'>general info</div>
        <ul className='asset__list'>
          <li className='asset__list-item'>price: {price}</li>
          <li className='asset__list-item'>max supply: {data.maxSupply}</li>
          <li className='asset__list-item'>available supply: {data.availableSupply}</li>
          <li className='asset__list-item'>market cap: {data.marketCap}</li>
        </ul>
      </div>
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

