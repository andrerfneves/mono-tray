import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import dashboardReducer from './dashboard';
import pricesReducer from './prices';
import loadingReducer from './loading';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  prices: pricesReducer,
  loading: loadingReducer,
  router: routerReducer,
});

export default rootReducer;
