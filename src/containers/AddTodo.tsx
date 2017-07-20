import * as React from 'react'
import { connect } from 'react-redux'
import { addTodo} from '../actions'

//{dispatch} : {dispatch: (todo: Todo) => void}
let AddTodo = ({dispatch} : {dispatch?: any}) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export const Add = connect()(AddTodo)
