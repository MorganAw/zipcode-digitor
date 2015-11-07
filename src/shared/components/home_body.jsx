import React from 'react';

export class home_body extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('*** Rendering home_body ***');
    return (
      <div>
        <h2>Welcome to MCAws Simple Node Webapp</h2>
        <p>Looks like stuff is running, time to start experimenting</p>
      </div>
    );
  }
};