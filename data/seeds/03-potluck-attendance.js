exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('potluck_attendance')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('potluck_attendance').insert([
        { pl_id: 1, user_id: 2 },
        { pl_id: 1, user_id: 4 },
        { pl_id: 2, user_id: 2 },
        { pl_id: 2, user_id: 4 },
      ]);
    });
};
