// @flow

import { connect } from 'react-redux';
import LoginView from '../views/login';
import { createUser, signIn } from '../actions/accounts';
import type { Dispatch } from '../types/redux';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createUser: () => dispatch(createUser()),
  signIn: () => dispatch(signIn()),
});

export default connect(
  null,
  mapDispatchToProps,
)(LoginView);
