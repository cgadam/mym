import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/FlochApp';
import * as initialState from './state/initialState'

require('./index.css');

window.FLOCH_INITIAL_STATE = initialState.default;

const store = createStore(state => state, initialState.default);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('mym')
);
