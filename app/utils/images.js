import btcImage from '../assets/icons/btc.png';
import ethImage from '../assets/icons/eth.png';
import xrpImage from '../assets/icons/xrp.png';
import dashImage from '../assets/icons/dash.png';
import eosImage from '../assets/icons/eos.png';
import ltcImage from '../assets/icons/ltc.png';
import adaImage from '../assets/icons/ada.png';
import xlmImage from '../assets/icons/xlm.png';
import bchImage from '../assets/icons/bch.png';

const ASSET_IMAGES = {
  BTC: btcImage,
  ETH: ethImage,
  XRP: xrpImage,
  DASH: dashImage,
  EOS: eosImage,
  LTC: ltcImage,
  BCH: bchImage,
  ADA: adaImage,
  XLM: xlmImage,
};

export const getAssetImage = asset => ASSET_IMAGES[asset] || ASSET_IMAGES.BTC;

