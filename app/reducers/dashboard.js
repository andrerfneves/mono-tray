// @flow

import { FETCH_DASHBOARD_SUCCESS } from '../constants/actions';
import type { Action } from '../types/redux';

const initialState = [];

export default (state: Array<*> = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_DASHBOARD_SUCCESS: {
      return action.payload.data;
    }
    default:
      return state;
  }
};
