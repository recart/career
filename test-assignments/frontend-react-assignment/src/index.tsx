import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Layout } from './components/layout/layout.component'
import './index.css'
import { store } from './store/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
