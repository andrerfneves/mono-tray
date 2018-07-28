// @flow

import {
  FETCH_ME_SUCCESS,
  SIGN_UP_SUCCESS,
  LOGIN_SUCCESS,
} from '../constants/actions';
import type { Action } from '../types/redux';

const initialState = {};

export default (state: Object = initialState, action: Action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
    case LOGIN_SUCCESS:
    case FETCH_ME_SUCCESS:
      return { ...action.payload };
    default:
      return state;
  }
};
