export function settings_query(client, callback) {
  console.log('In settings_query');
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query(`
      SELECT * FROM
      (t_prefs JOIN accurent_user ON t_prefs.user_id = accurent_user.id)
      WHERE accurent_user.email='julian@bloomsky.com';`,
      (err, result) => {
        if(err) { return console.error('error running query', err); }
        callback(result.rows[0]);
      }
    );
  });
};