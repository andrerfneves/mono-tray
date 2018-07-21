// @flow

import { push } from 'react-router-redux';
import { HOME_ROUTE } from '../constants/routes';
import { localSaveToken } from '../utils/token';
import {
  SIGN_UP_ERROR,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from '../constants/actions';
import { postSignup, setJWTTokenStorage } from '../services/mono';
import type { Action } from '../types/redux';

const signUpError = (err: Object): Action => ({
  type: SIGN_UP_ERROR,
  payload: err,
});

const signUpRequest = (email: string): Action => ({
  type: SIGN_UP_REQUEST,
  payload: {
    email,
  },
});

const signUpSuccess = (data: Object): Action => ({
  type: SIGN_UP_SUCCESS,
  payload: data,
});

export const signUp = (user: Object) => (dispatch: Function) => {
  dispatch(signUpRequest(user.email));

  return postSignup(user)
    .then((res) => {
      const { data } = res;

      localSaveToken(data.token);
      setJWTTokenStorage(data.token);

      dispatch(signUpSuccess(data.data));
      dispatch(push(HOME_ROUTE));
    })
    .catch(err => dispatch(signUpError(err)));
};
