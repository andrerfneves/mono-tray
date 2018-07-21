// @flow

import { fetchDashboard } from './dashboard';
import { fetchPrices } from './prices';

export const dataRefresh = () => (dispatch: Function) => {
  dispatch(fetchDashboard());
  dispatch(fetchPrices());
};
