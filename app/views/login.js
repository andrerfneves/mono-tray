// @flow

import React, { PureComponent } from 'react';

const blockstack = require('blockstack');
const REGISTER = 'register';
const LOGIN = 'login';

type Props = {
  // Actions
  createUser: Function,
  signIn: Function,
};

type State = {
  isSignedIn: any,
  person: any,
}

export default class LoginView extends PureComponent<{}, State> {
  constructor() {
    super();

    const isSignedIn = this.checkSignedInStatus();

    this.state = {
      isSignedIn,
      person: isSignedIn && this.loadPerson(),
    };
  }

  checkSignedInStatus = () => {
    if (blockstack.isUserSignedIn()) {
      // showProfile(profile)
      return true;
    } else if (blockstack.isSignInPending()) {
      blockstack.handlePendingSignIn().then((userData) => {
        window.location = window.location.origin;
      });
      return false;
    }
  }

  loadPerson =() => {
    const { profile } = blockstack.loadUserData();
    return new blockstack.Person(profile);
  }

  handleSignIn = (event: Object) => {
    event.preventDefault();
    blockstack.redirectToSignIn();
  }

  handleSignOut = (event: Object) => {
    event.preventDefault();
    blockstack.signUserOut(window.location.href);
  }

  render() {
    return (
      <div className='login'>
        <div className='login__header' />
        <div className='login__logo'>
          mono tray
        </div>
        <form className='login__form'>
          <header className='App-header'>
            <h1 className='App-title'>Blockstack Create React App</h1>
          </header>
          <p style={{ display: this.state.isSignedIn ? 'none' : 'block' }}>
            <button onClick={this.handleSignIn}>
              Sign-in with Blockstack
            </button>
          </p>
          <p style={{ display: !this.state.isSignedIn ? 'none' : 'block' }}>
            <button onClick={this.handleSignOut}>
              Sign-out
            </button>
          </p>
        </form>
        <div className='login__footer' />
      </div>
    );
  }
}
