// Import React
import { secrets }                   from './secrets';
import { retslyGrunt }               from './retslyGrunt';

// Import utilities
import pg                            from 'pg';
import util                          from 'util';
import https                         from 'https';
// Import controllers
import { save_tprofile }             from '../controllers/save_tprofile';
import { db_prep }                   from '../controllers/db_prep';
import { populate }                   from '../controllers/populate';

export function express_router(app, router) {
  var conString = "postgres://maw-bsky@localhost/retsly_hackathon";
  var client = new pg.Client(conString);

  /* -----=== API ENDPOINTS BELOW HERE ===----- */
  // Root path
  router.get('/', (req, res) => {
    console.log('***** Getting route path *****');
    res.render('index.html');
    // db_prep(client, populate);
  });

  router.get('/details', (req, res) => {
    console.log('***** Getting details path *****');
    res.render('details');
  });

  router.get('/tenant', (req, res) => {
    console.log('***** Getting route path *****');
    res.render('tenant');
  });

  router.get('/owner', (req, res) => {
    console.log('***** Getting owner route path *****');
  });

  // Heroku postgres connection
  // router.get('/db', function (req, res) {
  //   pg.connect(process.env.DATABASE_URL, function(err, client, done) {
  //     client.query('SELECT * FROM test_table', function(err, result) {
  //       done();
  //       if (err)
  //        { console.error(err); res.send("Error " + err); }
  //       else
  //        { res.render('pages/db', {results: result.rows} ); }
  //     });
  //   });
  // });

  /* -----=== API ENDPOINTS BELOW HERE ===----- */
  // Save user profile endpoint
  /*
  router.post('/save_tprofile', (req, res) => {
    save_tprofile(req, res, client, (results) => {
      console.log(results);
      //return results;
    });
  });
  */

  // call to API for listings
  router.post('/get_listings', (req, res) => {
    var finalR;
    if (req.body.value){
      let value = req.body.value;
      let optionsG = {
        hostname: 'maps.googleapis.com',
        port: 443,
        path: '/maps/api/geocode/json?address='+encodeURIComponent(value),
        method: 'GET'
      };
      // Prepare the AJAX call
      var ajaxG = https.request(optionsG, (resA) => {
        resA.setEncoding('utf8');
        var response = '';
        resA.on('data', (d) => {
          response += d;
        });
        resA.on('end', () => {
          let geoCodes = JSON.parse(response);
          let lat = geoCodes['results'][0]['geometry']['location']['lat'];
          let long = geoCodes['results'][0]['geometry']['location']['lng'];
          let optionsR = {
            hostname: 'rets.io',
            port: 443,
            path: '/api/v1/test/listings?access_token='+secrets.SERVER_TOKEN+
                  '&limit=2&near='+ lat +','+ long +'&radius=60mi',
            method: 'GET'
          };
          retslyGrunt(optionsR, function(fRes) {
              finalR = fRes;
          });
        });
      });
      // End AJAX preparation and send
      ajaxG.end();

      ajaxG.on('error', (e) => {
        if(e) console.log("GMaps API Error: ", e);
      })
    } else {
      console.log('finalR: ',finalR);
        res.render('tenant.html', {finalR});
    }
  });

  // Mount the router on the app
  app.use('/', router);
}
