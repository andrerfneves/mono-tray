export const parseDashboardData = (array: Array<*>) => array.map((asset) => {
  const { close, availableSupply } = asset;

  if (!availableSupply || !close) {
    return {
      ...asset,
      marketCap: 0,
    };
  }

  return {
    ...asset,
    marketCap: close * availableSupply,
  };
}).sort((assetA, assetB) => assetA.marketCap - assetB.marketCap)
  .reverse();

export const parsePricesData = (array: Array<*>) => {
  const prices = {};

  array.forEach((asset) => {
    const { price, currency } = asset;

    prices[currency] = price;
  });

  return prices;
};
