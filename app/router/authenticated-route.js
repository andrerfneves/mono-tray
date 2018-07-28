// @flow

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { localGetToken } from '../utils/token';
import { LOGIN_ROUTE } from '../constants/routes';

export default ({ component: Component, ...rest }: { component: any }) => {
  const token = localGetToken();
  const isValidUser = token && token !== 'undefined';

  return (
    <Route
      {...rest}
      render={props => (
        isValidUser ?
          <Component {...props} /> :
          <Redirect to={LOGIN_ROUTE} />
      )}
    />
  );
};
