import React from 'react';
import { Link } from 'react-router';

export class HomeBody extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('*** Rendering home_body ***');
    return (
      <div>
        <h2>Welcome to MCAws Simple Node Webapp</h2>
        <p>Looks like stuff is running, time to start experimenting</p>

        <h1>H O M E P A G E B O Y S</h1>
        <Link to={`/tenant`}>Login</Link>
      </div>
    );
  }
};