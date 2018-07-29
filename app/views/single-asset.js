// @flow

import React, { Fragment, PureComponent } from 'react';
import numeral from 'numeral';
import moment from 'moment';
import Spinner from '../components/spinner';
import { getAssetImage } from '../utils/images';

type Props = {
  match: Object,
  prices: Object,
  dashboard: Array<*>,
  loading: Object,
  fetchDashboard: Function,
  fetchPrices: Function,
};

export default class SingleAssetView extends PureComponent<Props> {
  componentDidMount() {
    const { fetchDashboard, fetchPrices } = this.props;

    fetchDashboard();
    fetchPrices();
  }

  getCurrentMarketCap = (marketCap: number) => numeral(marketCap).format('$0.00 a');
  getCurrentPrice = (currency: string) => {
    const { prices } = this.props;
    return numeral(prices[currency]).format('$0,0.0000');
  };

  getFormattedDate = (date: string) => moment(date).fromNow();

  getFormattedPrice = (price: string) => numeral(price).format('$0,0.0000');

  getFormattedIssuancePercentage = (currencyInfo: Object) => {
    const { maxSupply, availableSupply } = currencyInfo;

    return numeral(availableSupply / maxSupply).format('0.00%');
  }

  getFormattedTokenSupply = (tokenSupply: string) => numeral(tokenSupply).format('0.0a');

  getCurrencyInfo = () => {
    const { dashboard, match: { params } } = this.props;

    let assetIndex = 0;
    const dashboardObj = dashboard.filter((asset, index) => {
      if (asset.currency === params.currency) {
        assetIndex = index;
        return true;
      }

      return false;
    });

    if (dashboardObj && dashboardObj.length) {
      return {
        data: dashboardObj[0],
        index: assetIndex + 1,
      };
    }

    return {
      data: {},
      index: 0,
    };
  }

  renderContent = () => {
    const { data: currencyInfo } = this.getCurrencyInfo();

    return (
      <div className='single-asset__content'>
        <div className='single-asset__section-wrapper'>
          <div className='single-asset__section-label'>Transaction Volume</div>
          <div className='single-asset__section-content'>
            <div className='single-asset__section-column'>
              <div className='single-asset__internal-label'>
                24HR
              </div>
              <div className='single-asset__internal-value'>
                {this.getCurrentMarketCap(currencyInfo.dayVolume)}
              </div>
            </div>
            <div className='single-asset__section-column'>
              <div className='single-asset__internal-label'>
                7D
              </div>
              <div className='single-asset__internal-value'>
                {this.getCurrentMarketCap(currencyInfo.weekVolume)}
              </div>
            </div>
            <div className='single-asset__section-column'>
              <div className='single-asset__internal-label'>
                1M
              </div>
              <div className='single-asset__internal-value'>
                {this.getCurrentMarketCap(currencyInfo.monthVolume)}
              </div>
            </div>
          </div>
        </div>
        <div className='single-asset__section-wrapper'>
          <div className='single-asset__section-label'>ALL TIME HIGH</div>
          <div className='single-asset__section-content'>
            <div className='single-asset__section-column'>
              <div className='single-asset__internal-label'>
                PRICE
              </div>
              <div className='single-asset__internal-value'>
                {this.getFormattedPrice(currencyInfo.high)}
              </div>
            </div>
            <div className='single-asset__section-column'>
              <div className='single-asset__internal-label'>
                DATE
              </div>
              <div className='single-asset__internal-value no-uppercase'>
                {this.getFormattedDate(currencyInfo.highTimestamp)}
              </div>
            </div>
          </div>
        </div>
        <div className='single-asset__section-wrapper'>
          <div className='single-asset__section-label'>TOKEN SUPPLY</div>
          <div className='single-asset__section-content'>
            <div className='single-asset__section-column'>
              <div className='single-asset__internal-label'>
                Now
              </div>
              <div className='single-asset__internal-value no-uppercase'>
                {this.getFormattedTokenSupply(currencyInfo.availableSupply)}
              </div>
            </div>
            <div className='single-asset__section-column'>
              <div className='single-asset__internal-label'>
                Max
              </div>
              <div className='single-asset__internal-value no-uppercase'>
                {this.getFormattedTokenSupply(currencyInfo.maxSupply)}
              </div>
            </div>
            <div className='single-asset__section-column'>
              <div className='single-asset__internal-label'>
                Issuance
              </div>
              <div className='single-asset__internal-value no-uppercase'>
                {this.getFormattedIssuancePercentage(currencyInfo)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderHeader = () => {
    const {
      data: currencyInfo,
      index,
    } = this.getCurrencyInfo();

    return (
      <div className='single-asset__header'>
        <div className='single-asset__image-wrapper'>
          <div className='single-asset__name'>
            {currencyInfo.currency}
          </div>
          <img
            alt={currencyInfo.currency}
            src={getAssetImage(currencyInfo.currency)}
            className='single-asset__image'
          />
          <div className='single-asset__asset-index'>
            {index}
          </div>
        </div>
        <div className='single-asset__header-content'>
          <div className='single-asset__price'>
            {this.getCurrentPrice(currencyInfo.currency)}
          </div>
          <div className='single-asset__marketcap'>
            <span className='single-asset__marketcap-label'>MARKET CAP</span>{this.getCurrentMarketCap(currencyInfo.marketCap)}
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { loading: { status: loadingStatus } } = this.props;

    return (
      <div className='single-asset'>
        {!loadingStatus ?
          <Fragment>
            {this.renderHeader()}
            {this.renderContent()}
          </Fragment> :
          <Spinner isFullBleed />
        }
      </div>
    );
  }
}
