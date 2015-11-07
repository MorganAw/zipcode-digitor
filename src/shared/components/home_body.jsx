import React from 'react';
import { Link } from 'react-router';
import 

export class HomeBody extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('*** Rendering home_body ***');
    return (
      <head>
      <Link to={'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css'}</Link>
      <Link to={'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js'}</Link>
      </head>
      <body>
      <div>
        <h2>Welcome to MCAws Simple Node Webapp</h2>
        <p>Looks like stuff is running, time to start experimenting</p>

        <h1>H O M E P A G E B O Y S</h1>
        <Link to={`/tenant`}>Login</Link>
      </div>
      </body>
    );
  }
};