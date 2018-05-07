// @flow

import React, { PureComponent } from 'react';
import List from '../components/list';

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
  fetchDashboard: Function,
  fetchPrices: Function,
  dashboard: Array<*>,
  prices: Array<*>,
  loading: Object,
}

export default class FavoritesView extends PureComponent<Props> {
  componentDidMount() {
    const { fetchDashboard, fetchPrices } = this.props;

    fetchDashboard();
    fetchPrices();
  }

  render() {
    const { dashboard, prices, loading } = this.props;
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
        />
      </div>
    );
  }
}
