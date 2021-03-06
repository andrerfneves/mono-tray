// @flow

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AllMarketsView from '../views/all-markets';
import { fetchDashboard } from '../actions/dashboard';
import { fetchPrices } from '../actions/prices';
import type { AppState } from '../types/app-state';

const mapStateToProps = (state: AppState) => ({
  dashboard: state.dashboard,
  prices: state.prices,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch: Function) => ({
  fetchDashboard: () => dispatch(fetchDashboard()),
  fetchPrices: () => dispatch(fetchPrices()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllMarketsView));
