// @flow

import React, { PureComponent } from 'react';
import List from '../components/list';
import type { DashboardType } from '../types/dashboard';
import type { LoadingType } from '../types/loading';
import type { PricesType } from '../types/prices';

const ASSETS = [
  { ticker: 'BTC' },
  { ticker: 'ICX' },
  { ticker: 'ETC' },
  { ticker: 'ZEC' },
  { ticker: 'QSP' },
  { ticker: 'SUMO' },
  { ticker: 'VEN' },
];

type Props = {
  // Actions
  fetchDashboard: Function,
  fetchPrices: Function,

  // Data
  dashboard: DashboardType,
  loading: LoadingType,
  prices: PricesType,
}

export default class FavoritesView extends PureComponent<Props> {
  componentDidMount() {
    const { fetchDashboard, fetchPrices } = this.props;

    fetchDashboard();
    fetchPrices();
  }

  render() {
    const {
      dashboard,
      prices,
      loading,
      ...rest
    } = this.props;
    const favoriteItems = [];

    ASSETS.forEach((asset) => {
      dashboard.forEach((item) => {
        const isFavorited = asset.ticker === item.currency;
        if (isFavorited) favoriteItems.push(item);
      });
    });

    return (
      <div className='dashboard' >
        <List
          assets={favoriteItems}
          prices={prices}
          loading={loading}
          {...rest}
        />
      </div>
    );
  }
}
