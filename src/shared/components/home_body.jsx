import React from 'react';

var home_body = React.createClass({
  render() {
    console.log('*** Rendering home_body ***');
    return (
      <div>
        <h2>Welcome to MCAw's Simple Node Webapp</h2>
        <p>Looks like stuff is running, time to start experimenting</p>
      </div>
    );
  }
});

module.exports = home_body;
