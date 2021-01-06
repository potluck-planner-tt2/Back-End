const bcryptjs = require('bcryptjs');

const hashedPassword = bcryptjs.hashSync('password', 2);

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'colonel', password: hashedPassword },
        { username: 'sanders', password: hashedPassword },
        { username: 'ronald', password: hashedPassword },
        { username: 'mcdonald', password: hashedPassword },
        { username: 'joe', password: hashedPassword },
      ]);
    });
};
