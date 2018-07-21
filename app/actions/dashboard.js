// @flow

import {
  FETCH_DASHBOARD_REQUEST,
  FETCH_DASHBOARD_SUCCESS,
  FETCH_DASHBOARD_ERROR,
} from '../constants/actions';
import { getDashboard } from '../services/nomics';
import { parseDashboardData } from '../utils/parse';
import { toggleLoading } from './loading';

const fetchDashboardRequest = () => ({
  type: FETCH_DASHBOARD_REQUEST,
  payload: {},
});

const fetchDashboardError = (err: Object) => ({
  type: FETCH_DASHBOARD_ERROR,
  payload: { err },
});

const fetchDashboardSuccess = (data: Object) => ({
  type: FETCH_DASHBOARD_SUCCESS,
  payload: { data },
});

export const fetchDashboard = () => (dispatch: Function) => {
  dispatch(toggleLoading({ status: true }));
  dispatch(fetchDashboardRequest());

  return getDashboard()
    .then(result => result.json())
    .then(json => parseDashboardData(json))
    .then(data => dispatch(fetchDashboardSuccess(data)))
    .then(() => dispatch(toggleLoading({ status: false })))
    .catch(err => dispatch(fetchDashboardError(err)));
};

