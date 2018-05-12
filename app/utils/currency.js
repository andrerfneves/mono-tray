// @flow

import numeral from 'numeral';

const dollarAmount = '$0,0.00';
const largeDollarAmount = '($0.00 a)';

export const formatAmount = (value: string | number) => numeral(Number(value))
  .format(dollarAmount);

export const formatLargeAmount = (value: string | number) => numeral(Number(value))
  .format(largeDollarAmount);

