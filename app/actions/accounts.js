import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  SIGN_IN_USER_REQUEST,
  SIGN_IN_USER_SUCCESS,
  SIGN_IN_USER_ERROR,
} from '../constants/actions';
import { login, signUp } from '../services/api';

const signInRequest = ({ email, password }) => ({
  type: SIGN_IN_USER_REQUEST,
  payload: { email, password },
});

const signInSuccess = user => ({
  type: SIGN_IN_USER_SUCCESS,
  payload: user,
});

const signInError = err => ({
  type: SIGN_IN_USER_ERROR,
  payload: err,
});

export const signIn = ({ email, password }) => (dispatch) => {
  dispatch(signInRequest({ email, password }));

  return login({ email, password })
    .then(user => dispatch(signInSuccess(user)))
    .catch(err => dispatch(signInError(err)));
};

const createUserRequest = ({ email, password }) => ({
  type: CREATE_USER_REQUEST,
  payload: { email, password },
});

const createUserSuccess = user => ({
  type: CREATE_USER_SUCCESS,
  payload: user,
});

const createUserError = err => ({
  type: CREATE_USER_ERROR,
  payload: err,
});

export const createUser = ({ email, password }) => (dispatch) => {
  dispatch(createUserRequest({ email, password }));

  return signUp({ email, password })
    .then(user => dispatch(createUserSuccess(user)))
    .catch(err => dispatch(createUserError(err)));
};

