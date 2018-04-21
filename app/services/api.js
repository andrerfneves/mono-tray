import axios from 'axios';
import { API_KEY } from '../../keys';
import { API_URL } from '../constants/api';

const getEndpoint = endpoint => `${API_URL}${endpoint}?key=${API_KEY}`;

export const getDashboard = () => axios.get(getEndpoint('dashboard'));
export const getPrices = () => axios.get(getEndpoint('prices'));
export const getExchangeRates = () => axios.get(getEndpoint('exchange-rates'));
export const getSparkline = () => axios.get(getEndpoint('sparkline'));
export const getMarketCapSparkline = () => axios.get(getEndpoint('market-cap/sparkline'));
