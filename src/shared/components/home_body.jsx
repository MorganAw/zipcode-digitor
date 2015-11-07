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
      <div>
      <h2>Test</h2>
      // <nav class="navbar navbar-default navbar-static-top" role="navigation">
      //   <div class="container">
      //     <!-- Brand and toggle get grouped for better mobile display -->
      //     <div class="navbar-header">
      //       <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
      //         <span class="sr-only">Toggle navigation</span>
      //         <span class="icon-bar"></span>
      //         <span class="icon-bar"></span>
      //         <span class="icon-bar"></span>
      //       </button>
      //       <a class="navbar-brand" href="#">Accurent</a>
      //     </div>
      //   </div>
      // </nav>
        <h2>Welcome to MCAws Simple Node Webapp</h2>
        <p>Looks like stuff is running, time to start experimenting</p>

        <h1>H O M E P A G E B O Y S</h1>
        <Link to={`/tenant`}>Login</Link>
      </div>
    );
  }
};