import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import react_routes from '../../shared/react_routes';

import util from 'util';

export function express_router(app, router) {
  // Root path
  router.get('/', (req, res) => {
    console.log('***** Getting route path *****');
    match({ routes: react_routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        res.status(200).render('index', { stuff: renderToString(<RoutingContext { ...renderProps } />) });
      } else {
        res.status(404).send('Not found');
      }
    });
  });

  // Mount the router on the app
  app.use('/', router);
}