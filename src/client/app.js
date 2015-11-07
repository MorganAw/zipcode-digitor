import React                from 'react';
import ReactDOM             from 'react-dom';
import { Router, History }  from 'react-router';
import createHistory        from 'history/lib/createBrowserHistory';
import react_routes         from '../shared/react_routes';

console.log('Client-side app loaded');
let history = createHistory();

let unlisten = history.listen(function (location) {
  console.log(location.pathname)
});

ReactDOM.render(
  <Router history={ history }>{ react_routes }</Router>,
  document.getElementById('content')
);

unlisten();
