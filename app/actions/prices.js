// @flow

import {
  FETCH_PRICES_REQUEST,
  FETCH_PRICES_SUCCESS,
  FETCH_PRICES_ERROR,
} from '../constants/actions';
import { toggleLoading } from './loading';
import { getPrices } from '../services/api';
import { parsePricesData } from '../utils/parse';
import type { Dispatch } from '../types/redux';

const fetchPricesRequest = () => ({
  type: FETCH_PRICES_REQUEST,
  payload: {},
});

const fetchPricesError = err => ({
  type: FETCH_PRICES_ERROR,
  payload: { err },
});

const fetchPricesSuccess = data => ({
  type: FETCH_PRICES_SUCCESS,
  payload: { data },
});

export const fetchPrices = () => (dispatch: Dispatch) => {
  dispatch(toggleLoading({ status: true }));
  dispatch(fetchPricesRequest());

  return getPrices()
    .then(result => parsePricesData(result.data))
    .then(data => dispatch(fetchPricesSuccess(data)))
    .then(() => dispatch(toggleLoading({ status: false })))
    .catch(err => dispatch(fetchPricesError(err)));
};

