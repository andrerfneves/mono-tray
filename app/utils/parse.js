
export const parseDashboardData = array => array.map((asset) => {
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
