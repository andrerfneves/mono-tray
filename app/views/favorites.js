// @flow

import React, { PureComponent } from 'react';
import List from '../components/list';

const ASSETS = [
  { ticker: 'BTC' },
  { ticker: 'ICX' },
  { ticker: 'ZEC' },
  { ticker: 'ADA' },
  { ticker: 'VEN' },
];

type Props = {
  fetchDashboard: Function,
  fetchPrices: Function,
  dashboard: Array<*>,
  prices: Object,
  loading: Object,
  history: Object,
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
      history,
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
          isNumbered={false}
          history={history}
        />
      </div>
    );
  }
}
