import { combineReducers } from 'redux';
import dashboardReducer from './dashboard';
import pricesReducer from './prices';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  prices: pricesReducer,
});

export default rootReducer;
