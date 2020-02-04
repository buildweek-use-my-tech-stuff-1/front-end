import React from 'react';
import reactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer } from '../src/utils/reducer';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const store = createStore(reducer, applyMiddleware(ReduxThunk));

reactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
