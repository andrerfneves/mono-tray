// @flow

import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import loggerMiddleware from './middleware/logger';

export const history = createBrowserHistory();
const router = routerMiddleware(history);

export default function configureStore(initialState: Object) {
  let middleware;
  let enhancer;

  if (
    process.env.NODE_ENV !== 'production' ||
    process.env.NODE_ENV !== 'staging'
  ) {
    middleware = applyMiddleware(thunk, router, loggerMiddleware);
    enhancer = compose(
      middleware,
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    );
  } else {
    middleware = applyMiddleware(thunk, router);
    enhancer = compose(middleware);
  }

  return createStore(connectRouter(history)(rootReducer), initialState, enhancer);
}
