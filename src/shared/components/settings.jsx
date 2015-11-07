import React from 'react';
import { Link } from 'react-router';

export class Settings extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('*** Rendering settings ***');
    return (
      <div>
        <form action"/save_tsettings/" method="post">
          <input id='webapp_email' maxLength='128' name='webapp_email' placeholder='Registered BloomSky Email' type='email'>
          <input id='webapp_password' maxLength='128' name='webapp_password' placeholder='Password' type='password')
          
          input(id='login_btn' class='login_btn' type='submit' value='Sign in')
        </form>
      </div>
    );
  }
};