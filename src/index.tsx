import * as React from 'react'
import {createStore} from 'redux'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {App} from "./components/App"
import {todoApp} from "./reducers"

const store = createStore(todoApp)

render(
  <Provider store={store}>
    <App/>
 </Provider>, document.getElementById('root'))
