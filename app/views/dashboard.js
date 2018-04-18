// @flow

import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Menu from '../components/menu';
import List from '../components/list';

export default () => (
  <div className='dashboard'>
    <Header />
    <Menu />
    <List />
    <Footer />
  </div>
);
