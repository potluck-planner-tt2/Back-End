exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('event_foods')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('event_foods').insert([
        { pl_id: 1, food_id: 3, owner_id: 2 },
        { pl_id: 1, food_id: 5, owner_id: 1 },
        { pl_id: 1, food_id: 1, owner_id: 4 },
        { pl_id: 2, food_id: 4, owner_id: 2 },
        { pl_id: 1, food_id: 2, owner_id: 4 },
      ]);
    });
};
