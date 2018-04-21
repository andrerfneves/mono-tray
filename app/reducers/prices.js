// @flow

import { FETCH_PRICES_SUCCESS } from '../constants/actions';
import type { Action } from '../types/redux';

const initialState = {};

export default (state: Object = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_PRICES_SUCCESS: {
      return action.payload.data;
    }
    default:
      return state;
  }
};
