import React from 'react';

import { Menu } from './menu';
import { Listings } from './listings';

export class Tenant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Current preferences
      // Current profile
    };
  }
  render() {
    console.log('*** Rendering tenant ***');
    return (
      <div>
        <Menu />
        <Listings />
      </div>
    );
  }
};