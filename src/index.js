import React from 'react';
import ReactDOM from 'react-dom';
import createAppStore from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
const axiosDefaults = require('axios/lib/defaults');
axiosDefaults.baseURL = 'https://loft-taxi.glitch.me/';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={createAppStore()}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

