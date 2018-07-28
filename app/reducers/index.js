// @flow

import { combineReducers } from 'redux';
import dashboardReducer from './dashboard';
import pricesReducer from './prices';
import loadingReducer from './loading';
import userReducer from './user';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  prices: pricesReducer,
  loading: loadingReducer,
  user: userReducer,
});

export default rootReducer;
