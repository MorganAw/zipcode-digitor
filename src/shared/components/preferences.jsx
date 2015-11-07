import React from 'react';
import { Link } from 'react-router';

export class Preferences extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('*** Rendering settings ***');
    return (
      <div>
        <form action="/save_tsettings/" method="post">
          <input id='email' maxLength='128' name='email' placeholder='E M A I L B O Y S' type='email' />
          <input id='password' maxLength='128' name='password' placeholder='P A S S W O R D B O Y S' type='password' />
          
          <input id='login_btn' class='login_btn' type='submit' value='Sign in' />
        </form>
      </div>
    );
  }
};