export function db_prep(client) {
  console.log('In db_prep');
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('CREATE TABLE IF NOT EXISTS accurent_user( user_id bigserial primary key, user_email varchar(20) NOT NULL );', function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      console.log(result);
      client.end();
    });
  });
};