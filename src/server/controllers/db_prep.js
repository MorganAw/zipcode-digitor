export function db_prep(client, populate) {
  console.log('In db_prep');
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query(`CREATE TABLE IF NOT EXISTS accurent_user(
      id bigserial primary key,
      email varchar(50) NOT NULL,
      occupation varchar(50) NOT NULL,
      marital varchar(50) NOT NULL,
      income money NOT NULL,
      bday date NOT NULL,
      summary varchar(250) NOT NULL,
      refs json NOT NULL
    )`,
    function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
    });

    client.query(`CREATE TABLE IF NOT EXISTS t_prefs(
      user_id bigserial REFERENCES accurent_user (id),
      beds integer NOT NULL,
      baths integer NOT NULL,
      sqft integer NOT NULL,
      house_type varchar(35) NOT NULL,
      min money NOT NULL,
      max money NOT NULL,
      garage boolean NOT NULL,
      yard boolean NOT NULL,
      fire boolean NOT NULL,
      basement boolean NOT NULL,
      attic boolean NOT NULL
    )`,
    function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
    });

    client.query(`CREATE TABLE IF NOT EXISTS o_prefs(
      user_id bigserial REFERENCES accurent_user (id),
      property_id varchar NOT NULL UNIQUE,
      vendor varchar NOT NULL,
      price money NOT NULL,
      leeway integer NOT NULL,
      refs integer NOT NULL,
      income integer NOT NULL
    )`,
    function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      
    });

    client.query(`CREATE TABLE IF NOT EXISTS matches(
      user_id bigserial REFERENCES accurent_user (id),
      listing_id varchar REFERENCES o_prefs(property_id)
    )`,
    function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
    });

    populate(client);
  });
};