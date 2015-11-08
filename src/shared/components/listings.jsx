import React from 'react';

export class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: 'Data not ready yet!'}
  }

  shouldCompontentUpdate(nextProps, nextState){
      return (this.state.data !== nextState.data);
  }

  componentDidMount(){
    /*  AJAX REQUEST IN VANILLA JS  */
    let request = new XMLHttpRequest();
    request.open('POST', 'http://127.0.0.1:8080/get_listings', true);  // 'https://rocky-plateau-3596.herokuapp.com/get_listings'

    request.onload = () => {
        this.setState({
            data: JSON.parse(request.response).bundle
        });
    }.bind(this);

    request.onerror = (xhr, status, err) => {
      // if xhr request error, write it to console
      console.error(request.responseURL, status, err.toString());
    };
    request.send();  // send HTTP GETrequest
  }

  render() {
    console.log('Listings state at render: ', this.state);
    console.log('*** Rendering listings ***');
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
    console.log('Single Listing props: ', this.props);
    console.log('** Rendering single listing ** ');
    let image = this.props.data[0].media[0].url;
    return (
      <div>L I S T I N G B O Y S</div>
    );
  }
};
