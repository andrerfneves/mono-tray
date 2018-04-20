// @flow

import { connect } from 'react-redux';
import FavoritesView from '../views/favorites';
import { fetchDashboard } from '../actions/dashboard';
import type { AppState } from '../types/app-state';
import type { Dispatch } from '../types/redux';

const mapStateToProps = (state: AppState) => ({
  dashboard: state.dashboard,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchDashboard: () => dispatch(fetchDashboard()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoritesView);
