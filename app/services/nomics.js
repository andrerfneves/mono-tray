// @flow

import {
  NOMICS_API_URL,
  DASHBOARD_ENDPOINT,
  PRICES_ENDPOINT,
  EXCHANGE_RATES_ENDPOINT,
  SPARKLINE_ENDPOINT,
  MARKET_CAP_SPARKLINE_ENDPOINT,
} from '../constants/nomics';
import { NOMICS_API_KEY } from '../../keys';

type BaseGet = {
  url: string,
}

const buildUrl = (endpoint: string) =>
  `${NOMICS_API_URL}${endpoint}?key=${NOMICS_API_KEY}`;

export const baseGet = ({ url }: BaseGet) =>
  fetch(buildUrl(url));

export const getDashboard = () => baseGet({
  url: DASHBOARD_ENDPOINT,
});

export const getPrices = () => baseGet({
  url: PRICES_ENDPOINT,
});

export const getExchangeRates = () => baseGet({
  url: EXCHANGE_RATES_ENDPOINT,
});

export const getMarketCapSparkline = () => baseGet({
  url: MARKET_CAP_SPARKLINE_ENDPOINT,
});

export const getSparkline = () => baseGet({
  url: SPARKLINE_ENDPOINT,
});
