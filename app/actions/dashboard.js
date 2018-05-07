// @flow

import {
  FETCH_DASHBOARD_REQUEST,
  FETCH_DASHBOARD_SUCCESS,
  FETCH_DASHBOARD_ERROR,
} from '../constants/actions';
import { toggleLoading } from './loading';
import { getDashboard } from '../services/api';
import { parseDashboardData } from '../utils/parse';
import type { Dispatch } from '../types/redux';

const fetchDashboardRequest = () => ({
  type: FETCH_DASHBOARD_REQUEST,
  payload: {},
});

const fetchDashboardError = err => ({
  type: FETCH_DASHBOARD_ERROR,
  payload: { err },
});

const fetchDashboardSuccess = data => ({
  type: FETCH_DASHBOARD_SUCCESS,
  payload: { data },
});

export const fetchDashboard = () => (dispatch: Dispatch) => {
  dispatch(toggleLoading({ status: true }));
  dispatch(fetchDashboardRequest());

  return getDashboard()
    .then(result => parseDashboardData(result.data))
    .then(data => dispatch(fetchDashboardSuccess(data)))
    .then(() => dispatch(toggleLoading({ status: false })))
    .catch(err => dispatch(fetchDashboardError(err)));
};

