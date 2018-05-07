// @flow

import { TOGGLE_LOADING } from '../constants/actions';
import type { Action } from '../types/redux';

const initialState = { status: true };

export default (state: Object = initialState, action: Action) => {
  switch (action.type) {
    case TOGGLE_LOADING: {
      return action.payload;
    }
    default:
      return state;
  }
};
