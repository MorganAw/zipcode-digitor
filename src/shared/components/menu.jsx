import React    from 'react';
import { Link } from 'react-router';

export class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('*** Rendering menu ***');
    return (
      <div id="wrapper">
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li className="sidebar-brand">
              <a href="#">
                Profile Pic
              </a>
            </li>
            <li>
              <a href="#">Inbox</a>
            </li>
            <li>
              <a href="#">Saved List</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Preferences</a>
            </li>
          </ul>
        </div>
        <div id="page-content-wrapper">
          <div className="toggle-button"><a href="#menu-toggle" className="btn btn-default" id="menu-toggle">Toggle Menu</a></div>
          <div className="container-fluid">
            <div className="row">
              <h1> Suggested Listings for You </h1>
              <p> Photo 1 </p>
              <p> Photo 2 </p>
            </div>
          </div>
        </div>
      </div>


      // <div>
      //   <p>Profile Pic</p>
      //   <p>Profile Summary</p>
      //   <ul>
      //     <li>Stated Income</li>
      //     <li>Age</li>
      //     <li>Marital Status</li>
      //     <li>Job Title</li>
      //     <li># of References</li>
      //   </ul>
      //   <Link to={`/t_settings`}>Settings button</Link>
      // </div>
    );
  }
};