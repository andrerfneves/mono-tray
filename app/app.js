import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore, { history } from './store/configure';
import Router from './router';

const store = configureStore({});

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider>
);
