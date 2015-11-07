import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import favicon from 'serve-favicon';
import pg from 'pg';

// Import self-generated methods
import { express_router } from './config/routes';

const app = express();
var router = express.Router();

// Configure Jade
app.set('views', './src/shared/views');
app.set('view engine', 'jade');

// Set static & favicon paths
app.use(express.static(__dirname+'/../../../static'));
app.use(favicon(__dirname+'/../../../static/img/favicon.ico'));

// Set up request middleware
app.use(bodyParser.urlencoded(
  { extended: true }
));
app.use(bodyParser.json());

app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
  });
})

// Passport auth config
//auth(app, passport);

// Handle routing
express_router(app, router);

// Start the server
var server = app.listen(process.env.PORT || 8080, () => {
	var host = server.address().address;
	var port = server.address().port;
	var mode = app.settings.env;

	console.log('App listening at http://%s:%s in %s mode', host, port, mode);
});
