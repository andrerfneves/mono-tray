import { ASSET_ICONS } from '../constants/icons';

export const getAssetImage = asset => ASSET_ICONS[asset] || ASSET_ICONS.BTC;

