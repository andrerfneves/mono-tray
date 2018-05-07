import { combineReducers } from 'redux';
import dashboardReducer from './dashboard';
import pricesReducer from './prices';
import loadingReducer from './loading';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  prices: pricesReducer,
  loading: loadingReducer,
});

export default rootReducer;
