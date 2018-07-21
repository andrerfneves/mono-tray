// @flow

import { connect } from 'react-redux';
import Footer from '../components/footer';
import { dataRefresh } from '../actions/data-refresh';

const mapDispatchToProps = (dispatch: Function) => ({
  dataRefresh: () => dispatch(dataRefresh()),
});

export default connect(
  null,
  mapDispatchToProps,
)(Footer);
