import React from 'react';

export class Listings extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('*** Rendering listings ***');
    return (
      <div>
        <p>WE LIST NOW</p>
        <SingleListing />
      </div>
    );
  }
};

class SingleListing extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('** Rendering single listing ** ');
    return (
      <div>L I S T I N G B O Y S</div>
    );
  }
};