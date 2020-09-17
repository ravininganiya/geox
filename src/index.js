import React from 'react';
import ReactDOM from 'react-dom';
import history from './history';
import {Router} from 'react-router-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Reducers/index'
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
