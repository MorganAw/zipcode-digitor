import React from 'react';
import { Router, Route } from 'react-router';

// Import React components
import home_body from './components/home_body';

export default [
  <Route path="/" component={ home_body } key="home_body" />
];