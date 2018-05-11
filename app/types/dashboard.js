// @flow

export type DashboardItemType = {
  availableSupply: string,
  close: string,
  currency: string,
  dayOpen: string,
  dayOpenVolume: string,
  dayVolume: string,
  high: string,
  highExchange: string,
  highQuoteCurrency: string,
  highTimestamp: string,
  marketCap: string,
  maxSupply: string,
  monthOpen: string,
  monthOpenVolume: string,
  monthVolume: string,
  weekOpen: string,
  weekOpenVolume: string,
  weekVolume: string,
  yearOpen: string,
  yearOpenVolume: string,
  yearVolume: string,
};

export type DashboardType = Array<DashboardItemType>;
