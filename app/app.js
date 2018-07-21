// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { hot } from 'react-hot-loader';
import configureStore, { history } from './store/configure';
import Router from './router';
import { localGetToken } from './utils/token';
import { fetchMe } from './actions/me';
import { setJWTTokenStorage } from './services/mono';

const store = configureStore({});

// Access Token
const token = localGetToken() || '';
const isValidToken = token && token !== 'undefined';

if (isValidToken) {
  setJWTTokenStorage(token);
  store.dispatch(fetchMe());
}

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider>
);

export default hot(module)(App);
