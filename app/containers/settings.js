// @flow

import { connect } from 'react-redux';
import SettingsView from '../views/settings';

const mapStateToProps = (state: Object) => ({
  user: state.user,
});

export default connect(mapStateToProps)(SettingsView);
