// @flow

import React, { Component } from 'react';
import List from '../components/list';

type Props = {
  fetchDashboard: Function,
  fetchPrices: Function,
  dashboard: Array<*>,
  prices: Array<*>,
}

export default class FavoritesView extends Component<Props> {
  componentDidMount() {
    const { fetchDashboard, fetchPrices } = this.props;

    fetchDashboard();
    fetchPrices();
  }

  render() {
    const { dashboard, prices } = this.props;

    return (
      <div className='dashboard' >
        <List
          assets={dashboard}
          prices={prices}
        />
      </div>
    );
  }
}
