import https from 'https';

export function retslyGrunt(optionsR, done) {
  console.log('** Retsly grunt doing work **');

  // Prepare the AJAX call
  var ajaxR = https.request(optionsR, (res) => {
    res.setEncoding('utf8');
    var finalRes = '';
    res.on('data', (d) => {
        finalRes += d;
    });
    res.on('end', () => {
      let fRes = JSON.parse(finalRes);
      done(fRes);
    });
  });
  // End AJAX preparation and send
  ajaxR.end();

  ajaxR.on('error', (e) => {
    if(e) console.log("Retsly Grunt Error: ", e);
  });
}
