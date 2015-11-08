export function save_tprofile(data, client, done) {
  client.query('INSERT INTO t_prefs VALUES ('+
      '(SELECT id FROM accurent_user WHERE email=\'julian@bloomsky.com\'),'+
      data.beds+','+
      data.baths+','+
      data.sqft+','+
      '\'Condominium\','+
      data.poor+','+
      data.rich+','+
      data.car+','+
      data.grass+','+
      data.fire+','+
      data.emohut+','+
      data.emohut_2+');',
  function(err, result) {
    if (err) {
      console.error(err);
    } else {
      done();
    }
  });
}