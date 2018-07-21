// @flow

import axios from 'axios';
import {
  MONO_API_URL,
  SIGNUP_ENDPOINT,
  LOGIN_ENDPOINT,
  ME_ENDPOINT,
} from '../constants/mono';
import { JWT_TOKEN } from '../constants/jwt';

type BaseGet = {
  url: string,
}

type BasePost = {
  url: string,
  data?: Object,
}

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const monoApi = axios.create({
  baseURL: MONO_API_URL,
  headers: defaultHeaders,
});

export const setJWTTokenStorage = (token: string) => {
  if (token) monoApi.defaults.headers.common[JWT_TOKEN] = token;
};

export const baseGet = ({ url }: BaseGet) =>
  monoApi.get(url);

export const basePost = ({ url, data }: BasePost) =>
  monoApi.post(url, data);

export const basePut = ({ url, data }: BasePost) =>
  monoApi.put(url, data);

export const baseDelete = ({ url, data }: BasePost) =>
  monoApi.delete(url, data);

export const postSignup = (data: Object) => basePost({
  url: SIGNUP_ENDPOINT,
  data,
});

export const postLogin = (data: Object) => basePost({
  url: LOGIN_ENDPOINT,
  data,
});

export const getMe = () => baseGet({
  url: ME_ENDPOINT,
});
