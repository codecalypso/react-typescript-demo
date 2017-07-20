import * as React from 'react'

interface Props {
  onClick: Function;
  text: string;
  completed: boolean;
}

const Todo = ({ onClick, completed, text }: Props) => (
  <li
    onClick={(value) => onClick(value)}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

export default Todo
