// @flow

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginView from '../views/login';
import { login } from '../actions/login';
import { signUp } from '../actions/signup';

const mapDispatchToProps = (dispatch: Function) => ({
  login: (userObj: Object) => dispatch(login(userObj)),
  signUp: (userObj: Object) => dispatch(signUp(userObj)),
});

export default withRouter(connect(
  null,
  mapDispatchToProps,
)(LoginView));
