// @flow

import React, { Component } from 'react';
import List from '../components/list';

type Props = {
  fetchDashboard: Function,
  fetchPrices: Function,
  dashboard: Array<*>,
  prices: Array<*>,
  loading: Object,
  pushRoute: Function,
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
