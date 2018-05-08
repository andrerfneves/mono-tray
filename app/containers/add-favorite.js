// @flow

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AddFavoriteView from '../views/add-favorite';

// const mapStateToProps = (state: AppState) => ({
//   todos: state.todos,
// });

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   addTodo: text => dispatch(addTodo(text)),
//   deleteTodo: id => dispatch(deleteTodo(id)),
//   toggleEdit: id => dispatch(toggleEdit(id)),
//   updateTodo: (id, text) => dispatch(updateTodo(id, text)),
//   cancelUpdateTodo: id => dispatch(cancelUpdateTodo(id)),
// });

export default withRouter(connect(null, null,
  // mapStateToProps,
  // mapDispatchToProps,
)(AddFavoriteView));
