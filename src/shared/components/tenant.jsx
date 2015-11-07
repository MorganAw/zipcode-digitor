import React from 'react';

import { Menu } from './menu';
import { Settings } from './settings';
import { Listings } from './listings';

export class Tenant extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('*** Rendering tenant ***');
    return (
      <div>
        <Menu />
        <Settings />
        <Listings />
      </div>
    );
  }
};