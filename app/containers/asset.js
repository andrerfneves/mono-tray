// @flow

import { connect } from 'react-redux';
import AssetView from '../views/asset';

const mapStateToProps = state => ({
  dashboard: state.dashboard,
  prices: state.prices,
  loading: state.loading,
});

export default connect(mapStateToProps)(AssetView);
