// @flow

import { fetchDashboard } from './dashboard';
import { fetchPrices } from './prices';
import type { Dispatch } from '../types/redux';

export const dataRefresh = () => (dispatch: Dispatch) => {
  dispatch(fetchDashboard());
  dispatch(fetchPrices());
};
