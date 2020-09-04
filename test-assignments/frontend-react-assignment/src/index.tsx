import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './components/Layout/layout.component';
import { Provider } from 'react-redux'
import { store } from './store/store';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
