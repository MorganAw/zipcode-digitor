import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import react_routes from '../shared/react_routes';

console.log('Client-side app loaded');
ReactDOM.render(
  <Router>{ react_routes }</Router>,
  document.getElementById('content')
);
