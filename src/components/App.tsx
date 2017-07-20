import * as React from 'react'
import Footer from './Footer'
import {Add} from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

export const App = () => (
  <div>
    <Add />
    <VisibleTodoList />
    <Footer />
  </div>
)
