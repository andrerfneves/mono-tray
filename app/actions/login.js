// @flow

import { push } from 'react-router-redux';
import { HOME_ROUTE } from '../constants/routes';
import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from '../constants/actions';
import { postLogin, setJWTTokenStorage } from '../services/mono';
import { localSaveToken } from '../utils/token';
import type { Action } from '../types/redux';

const loginError = (error: Object): Action => ({
  type: LOGIN_ERROR,
  payload: {
    error,
  },
});

const loginRequest = (email: string): Action => ({
  type: LOGIN_REQUEST,
  payload: {
    email,
  },
});

const loginSuccess = (data: Object): Action => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const login = (user: Object) => (dispatch: Function) => {
  const { email, password } = user;
  dispatch(loginRequest(email));

  return postLogin({ email, password })
    .then((res) => {
      const { data } = res;

      localSaveToken(data.token);
      setJWTTokenStorage(data.token);

      dispatch(loginSuccess(data.data));
      dispatch(push(HOME_ROUTE));
    })
    .catch(err => dispatch(loginError(err)));
};
