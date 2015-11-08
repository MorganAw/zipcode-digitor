export function populate(client) {
  console.log('In populate');
  // client.connect(function(err) {
  //   if(err) {
  //     return console.error('could not connect to postgres', err);
  //   }
    client.query(`INSERT INTO accurent_user VALUES (
      default,
      'julian@bloomsky.com',
      'Software Engineer',
      'Married',
      1000000000,
      'Nov-08-2015',
      'I am a magician. I take coffee and turn it into software. Please give me a place to live!',
      '{ "Morgan": "It is totally true! I rented him my desk once and he turned the latte I left on my desk into a JSON object",
         "Varun": "I like the guy but I could not handle his creepy dog ..."
      }'
    )`,
    function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
    });

    client.query(`INSERT INTO accurent_user VALUES (
      default,
      'contactwentaoxu@gmail.com',
      'Harvard Student',
      'Single',
      50,
      'Nov-08-2015',
      'I am a poor college student. Please give me moneys ... just a simple $1000000 will help.',
      '{ "Varun": "I lived in his condo and finally saved enough money to buy a Big Mac at McDonalds thanks to his incredibly low rent!",
         "Morgan": "He was nice enough to let me pay my rent in potatoes."
      }'
    )`,
    function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
    });

    client.query(`INSERT INTO t_prefs VALUES (
      (SELECT id FROM accurent_user WHERE email='julian@bloomsky.com'),
      4,
      5,
      3000,
      'Condominium',
      1,
      10,
      TRUE,
      TRUE,
      FALSE,
      FALSE,
      FALSE
    )`,
    function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
    });

    client.query(`INSERT INTO o_prefs VALUES (
      (SELECT id FROM accurent_user WHERE email='contactwentaoxu@gmail.com'),
      '2a036c47dd29a2952c85c6a861136869',
      'test',
      100,
      1,
      1,
      1
    )`,
    function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
    });
//  });
};