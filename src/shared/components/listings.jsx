import React from 'react';
import homeResults from './home_body';

export class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: 'Data not ready yet!'}
  }

  shouldCompontentUpdate(nextProps, nextState){
      return (this.state.data !== nextState.data);
  }
  // loadData() {
  //   console.log("DL API Data: ", this.state.value0 + " / " + this.state.value1);
  //
  //   /*  AJAX REQUEST IN VANILLA JS  */
  //   let request = new XMLHttpRequest();
  //   request.open('GET', 'http://127.0.0.1:8000/get_listings', true);  // 'https://rocky-plateau-3596.herokuapp.com/get_listings'
  //
  //   request.onload = () => {
  //       this.setState({
  //
  //       });
  //   }.bind(this);
  //
  //   request.onerror = (xhr, status, err) => {
  //     // if xhr request error, write it to console
  //     console.error(request.responseURL, status, err.toString());
  //   };
  //   request.send();  // send HTTP GETrequest
  // }

  componentDidMount(){
    //   this.loadData();
  }

  render() {
    console.log('*** Rendering listings ***');
    this.state.data = homeResults;
    return (
      <div>
        <p>WE LIST NOW</p>
        <SingleListing data={this.state.data}/>
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
      <div>L I S T I N G B O Y S {this.props.data}</div>
    );
  }
};
