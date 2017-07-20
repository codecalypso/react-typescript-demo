
type TodoType = "ADD_TODO" | "SET_VISIBILITY_FILTER" | "TOGGLE_TODO"

export interface Todo { type: TodoType, id: number, text: string, anotherkey: {id : number}}
export interface Toggle { type: TodoType, id: number }
export interface Visibility {type: TodoType, filter: any}

export type AddTodo = (text: string) => Todo
export type ToggleTodo = (id: number) => Toggle
export type FilterTodo = (filter: any) => Visibility

let nextTodoId = 0

export const addTodo: AddTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  anotherkey: {
    id: 8
  },
  text
})

export const setVisibilityFilter: FilterTodo = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo: ToggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
