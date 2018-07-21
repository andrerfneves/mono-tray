// @flow

import { JWT_TOKEN } from '../constants/jwt';

export const localSaveToken = (t: string) => {
  if (t) localStorage.setItem(JWT_TOKEN, t);
};
export const localGetToken = () => localStorage.getItem(JWT_TOKEN);
export const localClearToken = () => localStorage.setItem(JWT_TOKEN, '');
