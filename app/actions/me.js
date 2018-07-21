// @flow

import { push } from 'react-router-redux';
import { HOME_ROUTE } from '../constants/routes';
import { localSaveToken } from '../utils/token';
import {
  FETCH_ME_ERROR,
  FETCH_ME_REQUEST,
  FETCH_ME_SUCCESS,
} from '../constants/actions';
import { getMe, setJWTTokenStorage } from '../services/mono';
import type { Action } from '../types/redux';

const fetchMeError = (err: Object): Action => ({
  type: FETCH_ME_ERROR,
  payload: err,
});

const fetchMeRequest = (): Action => ({
  type: FETCH_ME_REQUEST,
  payload: {},
});

const fetchMeSuccess = (data: Object): Action => ({
  type: FETCH_ME_SUCCESS,
  payload: data,
});

export const fetchMe = (redirectHome: boolean = false) =>
  (dispatch: Function) => {
    dispatch(fetchMeRequest());

    return getMe()
      .then((res) => {
        const { data } = res;

        localSaveToken(data.token);
        setJWTTokenStorage(data.token);

        dispatch(fetchMeSuccess(data.data));

        if (redirectHome) {
          dispatch(push(HOME_ROUTE));
        }
      })
      .catch(err => dispatch(fetchMeError(err)));
  };

