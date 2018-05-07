import axios from 'axios';
import Base from 'clay-base-sdk';
import { API_KEY, BASE_KEY } from '../../keys';
import { API_URL } from '../constants/api';

Base.init(BASE_KEY);

const getEndpoint = endpoint => `${API_URL}${endpoint}?key=${API_KEY}`;

export const getDashboard = () => axios.get(getEndpoint('dashboard'));
export const getPrices = () => axios.get(getEndpoint('prices'));
export const getExchangeRates = () => axios.get(getEndpoint('exchange-rates'));
export const getSparkline = () => axios.get(getEndpoint('sparkline'));
export const getMarketCapSparkline = () => axios.get(getEndpoint('market-cap/sparkline'));

export const signUp = ({ email, password }) => Base.User.register({
  email,
  password,
});
export const login = ({ email, password }) => Base.User.login({
  email,
  password,
});
