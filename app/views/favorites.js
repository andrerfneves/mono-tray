// @flow

import React, { Component } from 'react';
import List from '../components/list';

type Props = {
  fetchDashboard: Function,
  dashboard: Array<*>,
}

export default class FavoritesView extends Component<Props> {
  componentDidMount() {
    const { fetchDashboard } = this.props;
    fetchDashboard();
  }

  render() {
    const { dashboard } = this.props;

    return (
      <div className='dashboard' >
        <List assets={dashboard} />
      </div>
    );
  }
}
