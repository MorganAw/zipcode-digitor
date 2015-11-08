// Import React
import React                         from 'react';
import { renderToString }            from 'react-dom/server';
import { match, RoutingContext }     from 'react-router';
import react_routes                  from '../../shared/react_routes';
import { secrets }                   from './secrets';
import { retslyGrunt }               from './retslyGrunt';

// Import utilities
import pg                            from 'pg';
import util                          from 'util';
// Import controllers
import { save_tprofile }             from '../controllers/save_tprofile';
import { db_prep }                   from '../controllers/db_prep';

export function express_router(app, router) {
  var conString = "postgres://maw-bsky@localhost/retsly_hackathon";
  var client = new pg.Client(conString);

  // API endpoints
  router.post('/save_tprofile', (req, res) => {
    save_tprofile(req, res, client, (results) => {
      console.log(results);
      //return results;
    });
  });

  router.get('/get_listings', (req, res) => {
      let options = {
          hostname: 'rets.io',
          port: 443,
          path: '/api/v1/test/listings?access_token='+secrets.SERVER_TOKEN+
                '&limit=2&near=-122.395743,37.793662&radius=10mi',
          method: 'GET'
      };
      console.log("OPTIONS: ", options);
      retslyGrunt(options, function(response) {
          res.render(response);
      });
  });

  // Root path
  router.get('/', (req, res) => {
    console.log('***** Getting route path *****');
    react_routing(req, res);
    db_prep(client);
  });

  router.get('/db', function (req, res) {
    pg.connect(process.env.DATABASE_URL, function(err, client, done) {
      client.query('SELECT * FROM test_table', function(err, result) {
        done();
        if (err)
         { console.error(err); res.send("Error " + err); }
        else
         { res.render('pages/db', {results: result.rows} ); }
      });
    });
  })

  router.get('/how_it_works', (req, res) => {
    console.log('***** Getting how_it_works path *****');
    react_routing(req, res);
  });

  router.get('/details', (req, res) => {
    console.log('***** Getting details path *****');
    react_routing(req, res);
  });

  router.get('/tenant', (req, res) => {
    console.log('***** Getting route path *****');
    react_routing(req, res);
  });

  router.get('/tenant/*', (req, res) => {
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
