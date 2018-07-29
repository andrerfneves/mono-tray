// @flow

import React, { Component } from 'react';
import List from '../components/list';

type Props = {
  fetchDashboard: Function,
  fetchPrices: Function,
  dashboard: Array<*>,
  prices: Object,
  loading: Object,
  history: Object,
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
      history,
    } = this.props;

    return (
      <div className='dashboard' >
        <List
          assets={dashboard}
          prices={prices}
          loading={loading}
          isNumbered
          history={history}
        />
      </div>
    );
  }
}
