import React from 'react';
import { Link } from 'react-router';

import { Preferences } from './preferences';

export class Settings extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('*** Rendering settings ***');
    return (
      <div>
        <Preferences />
      </div>
    );
  }
};