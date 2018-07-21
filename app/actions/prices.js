// @flow

import {
  FETCH_PRICES_REQUEST,
  FETCH_PRICES_SUCCESS,
  FETCH_PRICES_ERROR,
} from '../constants/actions';
import { toggleLoading } from './loading';
import { getPrices } from '../services/nomics';
import { parsePricesData } from '../utils/parse';
import type { Action } from '../types/redux';

const fetchPricesRequest = (): Action => ({
  type: FETCH_PRICES_REQUEST,
  payload: {},
});

const fetchPricesError = (err: Object): Action => ({
  type: FETCH_PRICES_ERROR,
  payload: { err },
});

const fetchPricesSuccess = (data: Object): Action => ({
  type: FETCH_PRICES_SUCCESS,
  payload: { data },
});

export const fetchPrices = () => (dispatch: Function) => {
  dispatch(toggleLoading({ status: true }));
  dispatch(fetchPricesRequest());

  return getPrices()
    .then(result => result.json())
    .then(json => parsePricesData(json))
    .then(data => dispatch(fetchPricesSuccess(data)))
    .then(() => dispatch(toggleLoading({ status: false })))
    .catch(err => dispatch(fetchPricesError(err)));
};

