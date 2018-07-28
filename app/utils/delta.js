// @flow

import numeral from 'numeral';

export const getAssetDelta = (asset: Object, prices: Object) => {
  const { dayOpen, currency } = asset;

  const openPrice = dayOpen || 0;
  const currentPrice = prices[currency] || 0;
  const delta = (currentPrice / openPrice) - 1;
  const isNegative = delta < 0;
  const sign = isNegative ? '-' : '+';
  const value = isNegative ? delta.toString().split('-')[1] : delta;
  const formattedValue = numeral(Number(value)).format('0.00%');

  return {
    sign,
    delta,
    value: formattedValue,
  };
};
