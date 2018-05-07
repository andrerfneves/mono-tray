// @flow

import { connect } from 'react-redux';
import Footer from '../components/footer';
import { dataRefresh } from '../actions/data-refresh';
import type { Dispatch } from '../types/redux';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dataRefresh: () => dispatch(dataRefresh()),
});

export default connect(
  null,
  mapDispatchToProps,
)(Footer);
