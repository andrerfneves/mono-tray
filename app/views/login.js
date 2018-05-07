// @flow

import React, { PureComponent, Fragment } from 'react';

const REGISTER = 'register';
const LOGIN = 'login';

type Props = {
  createUser: Function,
  signIn: Function,
};

type State = {
  type: string,
  email: string,
  password: string,
}

export default class LoginView extends PureComponent<Props, State> {
  state = {
    type: LOGIN,
    email: '',
    password: '',
  };

  toggleLoginState = (e: any) => {
    e.preventDefault();
    this.setState({ type: LOGIN });
  }

  toggleCreateUserState = (e: any) => {
    e.preventDefault();
    this.setState({ type: REGISTER });
  }

  renderSubmitButton = () => {
    const { type, email, password } = this.state;
    const { createUser, signIn } = this.props;
    const label = type === REGISTER ? 'Register' : 'Log In';
    const onClick = (type === REGISTER) ?
      () => createUser({ email, password }) :
      () => signIn({ email, password });

    return (
      <button
        onClick={onClick}
        className='login__submit'
      >
        {label}
      </button>
    );
  }

  renderToggler = () => {
    const { type } = this.state;
    const label = type === REGISTER ? 'or Log In' : 'or Create account';
    const onClick = (type === REGISTER) ?
      e => this.toggleLoginState(e) :
      e => this.toggleCreateUserState(e);

    return (
      <button
        onClick={onClick}
        className='login__toggler'
      >
        {label}
      </button>
    );
  }

  renderForm = () => (
    <Fragment>
      <input
        className='login__input'
        placeholder='Email Address'
        type='text'
      />
      <input
        className='login__input'
        placeholder='Password'
        type='password'
      />
    </Fragment>
  );

  render() {
    return (
      <div className='login'>
        <div className='login__header' />
        <div className='login__logo'>
          mono tray
        </div>
        <form className='login__form'>
          {this.renderForm()}
          {this.renderSubmitButton()}
          {this.renderToggler()}
        </form>
        <div className='login__footer' />
      </div>
    );
  }
}
