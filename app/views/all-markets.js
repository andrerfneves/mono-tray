// @flow

import React, { Component } from 'react';
import List from '../components/list';
import type { DashboardType } from '../types/dashboard';
import type { LoadingType } from '../types/loading';
import type { PricesType } from '../types/prices';

type Props = {
  // Actions
  fetchDashboard: Function,
  fetchPrices: Function,
  pushRoute: Function,

  // Data
  dashboard: DashboardType,
  loading: LoadingType,
  prices: PricesType,
}

export default class AllMarketsView extends Component<Props> {
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

    return (
      <div className='dashboard' >
        <List
          assets={dashboard}
          prices={prices}
          loading={loading}
          {...rest}
        />
      </div>
    );
  }
}
