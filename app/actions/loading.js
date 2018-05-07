// @flow

import { TOGGLE_LOADING } from '../constants/actions';

export const toggleLoading = (statusObj: Object) => ({
  type: TOGGLE_LOADING,
  payload: statusObj,
});

