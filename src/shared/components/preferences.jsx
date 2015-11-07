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
          WHERE YOU WANT TO LIVE? <input type="text" /><br />
          HOW MANY BEDS YOU WANT? <input type="number" name="beds" min="0" max="25" /><br />
          HOW MANY BATHS YOU WANT? <input type="number" name="baths" min="0" max="25" /><br />
          HOW MANY SQUARE FEET YOU WANT? <input type="number" name="sqft" min="0" max="1000000" /><br />
          HOW FUCKING POOR ARE YOU? <input type="number" name="poor" min="0" max="100000000" /><br />
          HOW FUCKING RICH ARE YOU? <input type="number" name="rich" min="1" max="100000000" /><br />
          WHAT STUPID FEATURES DO YOU WANT?<br />
          <input type="checkbox" name="car" /> Garage<br />
          <input type="checkbox" name="grass" /> Yard<br />
          <input type="checkbox" name="fire" /> Fireplace<br />
          <input type="checkbox" name="emohut" /> Basement<br />
          <input type="checkbox" name="emohut_2" /> Attic<br />
          <input type='submit' value='SAVE' />
        </form>
      </div>
    );
  }
};