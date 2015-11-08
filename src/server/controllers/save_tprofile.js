export function save_tprofile(req, res, pg, callback) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err) {
        console.error(err); res.send("Error " + err);
      } else {
        callback(result.rows);
      }
    });
  });
}