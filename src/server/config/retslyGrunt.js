import https from 'https';

export function retslyGrunt(options, done) {
  console.log('** Retsly grunt doing work **');

  // Prepare the AJAX call
  var ajax = https.request(options, (res) => {
    res.setEncoding('utf8');
    var response = '';
    res.on('data', (d) => {
        response += d;
    });
    res.on('end', () => {
      let user = JSON.parse(response);
      done(response);
  });
  });
  // End AJAX preparation and send
  ajax.end();

  ajax.on('error', (e) => {
    if(e) console.log("Retsly Grunt Error: ", e);
  });
}
