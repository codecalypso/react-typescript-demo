import * as React from 'react'
import Todo from './Todo'
import * as R from 'ramda'

export type Todos = Array<Todo>;

export type Todo = {
  id: number,
  text: string,
  completed: boolean
};

interface Props {
  todos: Array<Todo>;
  onTodoClick: Function;
}

const TodoList = ({ todos, onTodoClick }: Props) => (
  <ul>
    {
       R.map((todo) => <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
        />,(todos))
    }
  </ul>
)

export default TodoList
