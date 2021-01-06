exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('potlucks')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('potlucks').insert([
        {
          name: 'The Colonels Picnic',
          location: 'Rural Kentucky',
          organizer_id: 1,
          date_time: '2021-02-15 12:00',
        },
        {
          name: 'Dinner with Ronald',
          location:'Havana, Cuba',
          organizer_id: 3,
          date_time: '2021-01-29 14:00',
        },
      ]);
    });
};
