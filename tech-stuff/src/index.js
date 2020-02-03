import React from 'react';
import reactDOM from 'react-dom';
// import { createStore, applyMiddleware } from "redux";
// import thunk from 'redux-thunk';
// import { Provider } from 'react-redux';
// import { reducer } from '../src/utils/reducer';
import App from './App';

// const store = createStore(reducer, applyMiddleware(thunk));

reactDOM.render(<App />, document.getElementById('root'));
