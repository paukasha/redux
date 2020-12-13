'use strict'
import '../css/style.css';
import '../index.html';

import React from 'react';
import ReactDOM from 'react-dom';

import App from '../containers/app';
import {createStore} from 'redux';
import comments from '../reducers';

const initialState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : [];

const store = createStore(comments, initialState);
store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

ReactDOM.render(
  <App store={store} />,
  document.querySelector('#root')
);
