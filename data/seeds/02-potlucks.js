exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('potlucks')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('potlucks').insert([
        { name: 'The Colonels Picnic', organizer_id: 1 },
        { name: 'Dinner with Ronald', organizer_id: 3 },
      ]);
    });
};
