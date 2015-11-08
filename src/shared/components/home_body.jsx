import React      from 'react';
import { Link }   from 'react-router';

export var homeResults = {};
export class HomeBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Where do you want to live?'};
  }

  shouldCompontentUpdate(nextProps, nextState){
      console.log('*** home_body shouldCompontentUpdate() ***');
      return (this.state.value !== nextState.value);
  }

  initSearch() {
      console.log('*** home_body initSearch() ***');
    var getListisngs = {
        value: this.state.value
    };
    console.log("POSTING: ", getListisngs);
    if ((this.state.value !== null)&&(this.state.value !== undefined)){
        /*  AJAX REQUEST IN VANILLA JS  */
        let request = new XMLHttpRequest();
        request.open('POST', 'http://127.0.0.1:8080/get_listings', true);  // 'https://rocky-plateau-3596.herokuapp.com/get_listings'

        request.onload = () => {
            homeResults = request.response;
        }.bind(this);

        request.onerror = (xhr, status, err) => {
          // if xhr request error, write it to console
          console.error(request.responseURL, status, err.toString());
        };
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');  // set http header for POST
        request.send(JSON.stringify(getListisngs));
    }
  }

  handleChange(event) {
      console.log('*** home_body handleChange() ***');
    this.setState({value: event.target.value});
  }

  render() {
    console.log('*** Rendering home_body ***');
    let value = this.state.value;

    return (
      <div>
        <div className="landing-page">
          <nav className="navbar navbar-default navbar-static-top navbar-background" role="navigation">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#"><span className="brand-size">Accurent</span></a>
              </div>
              <div className="row">
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav pull-right">
                  <li id="listing"><Link to={`/tenant`}>Post a Listing</Link></li>
                  <li><Link to={`/details`}>Help</Link></li>
                  <li><Link to={`/tenant`}>Sign Up</Link></li> 

                  <li><Link to={`/tenant`}>Login</Link></li>
                </ul>
              </div>
              </div>
            </div>
          </nav>
          <div className="col-xs-12">
            <div className="text-branding">Find Your Apartment</div>
          </div>
          <div className="col-xs-12">
            <div className="how-it-works">
              <Link to={`/how_it_works`}><span>How It Works</span></Link>
            </div>
          </div>
          <div className="col-xs-8 col-xs-offset-2 search-bar">
            <div className="input-group">
              <input type="text" className="form-control search-bar-height" value={value} onChange={this.handleChange.bind(this)} />
                <span className="input-group-btn">
                  <button className="btn btn-default red-button search-bar-height" type="button" onClick={this.initSearch.bind(this)}>Search</button>
                </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
