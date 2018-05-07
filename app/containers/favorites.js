// @flow

import { connect } from 'react-redux';
import FavoritesView from '../views/favorites';
import { fetchDashboard } from '../actions/dashboard';
import { fetchPrices } from '../actions/prices';
import type { AppState } from '../types/app-state';
import type { Dispatch } from '../types/redux';

const mapStateToProps = (state: AppState) => ({
  dashboard: state.dashboard,
  prices: state.prices,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchDashboard: () => dispatch(fetchDashboard()),
  fetchPrices: () => dispatch(fetchPrices()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoritesView);
