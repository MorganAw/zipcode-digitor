import React from 'react';
import { Router, Route } from 'react-router';

// Import React components
import { HomeBody } from './components/home_body';
import { Tenant } from './components/tenant';
import { Menu } from './components/menu';
import { Settings } from './components/settings';
import { Listings } from './components/listings';

export default [
  <Route path="/" component={ HomeBody } key="home_body" />,
  <Route path="/tenant" component={ Tenant } key="tenant">
    <Route path="menu" component={ Menu } key="menu" />
    <Route path="settings" component={ Settings } key="settings" />
    <Route path="listings" component={ Listings } key="listings" />
  </Route>,
  <Route path="/owner" component={ Tenant } key="tenant">
    <Route path="menu" component={ Menu } key="menu" />
    <Route path="settings" component={ Settings } key="settings" />
    <Route path="settings" component={ Settings } key="settings" />
  </Route>
];