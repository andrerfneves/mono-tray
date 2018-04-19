// @flow

import React, { Component } from 'react';
import axios from 'axios';
import List from '../components/list';
import { API_KEY } from '../../keys';

export default class FavoritesView extends Component<{}> {
  componentDidMount() {
    axios.get(`https://api.nomics.com/v1/dashboard?key=${API_KEY}`)
      .then(res => console.log(res)) // eslint-disable-line
      .catch(err => console.log(err));  // eslint-disable-line
  }

  render() {
    return (
      <div className='dashboard' >
        <List />
      </div>
    );
  }
}
