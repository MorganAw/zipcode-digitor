import React    from 'react';
import { Link } from 'react-router';

export class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('*** Rendering menu ***');
    return (
      <div>
        <p>Profile Pic</p>
        <p>Profile Summary</p>
        <ul>
          <li>Stated Income</li>
          <li>Age</li>
          <li>Marital Status</li>
          <li>Job Title</li>
          <li># of References</li>
        </ul>
        <Link to={`/t_settings`}>Settings button</Link>
      </div>
    );
  }
};