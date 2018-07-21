// @flow

import { push } from 'react-router-redux';
import { setJWTTokenStorage } from '../services/mono';
import { localClearToken } from '../utils/token';
import { LOGOUT } from '../constants/actions';
import type { Action } from '../types/redux';

const logoutUser = (): Action => ({
  type: LOGOUT,
  payload: {},
});

export const logout = () => (dispatch: Function) => {
  // Logout User
  dispatch(logoutUser());

  // Clear JWT Token
  localClearToken();
  setJWTTokenStorage('');

  // Route to Home
  dispatch(push('/'));
};
