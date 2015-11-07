import React                         from 'react';
import { renderToString }            from 'react-dom/server';
import { match, RoutingContext }     from 'react-router';
import react_routes                  from '../../shared/react_routes';

import util from 'util';

export function express_router(app, router) {
  // API endpoints
  router.post('/save_tsettings', (req, res) => {

  });

  router.get('/get_listings', (req, res) => {

  });  

  // Root path
  router.get('/', (req, res) => {
    console.log('***** Getting route path *****');
    react_routing(req, res);
  });

  router.get('/tenant', (req, res) => {
    console.log('***** Getting route path *****');
    react_routing(req, res);
  });

  router.get('/owner', (req, res) => {
    console.log('***** Getting route path *****');
    react_routing(req, res);
  });
  // Mount the router on the app
  app.use('/', router);

  function react_routing(req, res) {
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
  };
}