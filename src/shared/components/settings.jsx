import React from 'react';
import { Link } from 'react-router';

export class Settings extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('*** Rendering settings ***');
    return (
      <div>
        SETTINGS ARE HERE
      </div>
    );
  }
};