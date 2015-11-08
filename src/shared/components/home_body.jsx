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
              <input type="text" className="form-control search-bar-height" placeholder="Where do you want to live?"></input>
                <span className="input-group-btn">
                  <button className="btn btn-default red-button search-bar-height" type="button">Search</button>
                </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};