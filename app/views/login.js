// @flow

import React, { PureComponent, Fragment } from 'react';
import Input from '../components/input';

const REGISTER = 'register';
const LOGIN = 'login';

type Props = {
  signUp: Function,
  login: Function,
};

type State = {
  type: string,
  name: string,
  email: string,
  password: string,
}

export default class LoginView extends PureComponent<Props, State> {
  state = {
    type: LOGIN,
    name: '',
    email: '',
    password: '',
  };

  toggleLoginState = (e: any) => {
    e.preventDefault();
    this.setState(() => ({ type: LOGIN }));
  }

  toggleCreateUserState = (e: any) => {
    e.preventDefault();
    this.setState(() => ({ type: REGISTER }));
  }

  handleInputChange = (e: Object, property: string) => {
    const { target: { value } } = e;
    this.setState(() => ({ [`${property}`]: value }));
  }

  handleSubmitButton = (e: Object) => {
    const {
      type,
      name,
      email,
      password,
    } = this.state;
    const { signUp, login } = this.props;

    e.preventDefault();
    if (type === REGISTER) {
      signUp({ name, email, password });
    } else {
      login({ password, email });
    }

    this.setState(() => ({
      name: '',
      email: '',
      password: '',
    }));
  }

  renderSubmitButton = () => {
    const { type } = this.state;
    const label = type === REGISTER ? 'Register' : 'Log In';

    return (
      <button
        onClick={this.handleSubmitButton}
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
      (e: Object) => this.toggleLoginState(e) :
      (e: Object) => this.toggleCreateUserState(e);

    return (
      <button
        onClick={onClick}
        className='login__toggler'
      >
        {label}
      </button>
    );
  }

  renderForm = () => {
    const { type } = this.state;

    return (
      <Fragment>
        {(type === LOGIN) ? null : (
          <Input
            placeholder='Name'
            type='text'
            onChange={(e: Object) => this.handleInputChange(e, 'name')}
          />
        )}
        <Input
          placeholder='Email Address'
          type='text'
          onChange={(e: Object) => this.handleInputChange(e, 'email')}
        />
        <Input
          placeholder='Password'
          type='password'
          onChange={(e: Object) => this.handleInputChange(e, 'password')}
        />
      </Fragment>
    );
  }

  render() {
    return (
      <div className='login'>
        <div className='login__header' />
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
