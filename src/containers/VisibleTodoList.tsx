import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
//import * as R from "ramda"

const getVisibleTodos = (todos, filter) => {
//   R.cond([
//     [R.equals('SHOW_ALL'), todos],
//     [R.equals('SHOW_COMPLETED'), R.filter(t => t.completed, todos)],
//     [R.equals('SHOW_ACTIVE'), R.filter(t => !t.completed, todos)],
//     [R.T, R.always('Unknown filter: ' + filter)]
// ])(filter)

switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
 }

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = {
  onTodoClick: toggleTodo
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
