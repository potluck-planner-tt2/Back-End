const db = require('../../../data/dbConfig');

const findUserById = (id) => {
  return db('users')
    .select('user_id', 'username')
    .where({ user_id: id })
    .first();
};

const findUserByName = (name) => {
  return db('users')
    .select('user_id', 'username')
    .where({ username: name })
    .first();
};

const findPotluckById = (id) => {
  return db('potlucks as p')
    .select('p.pl_id', 'p.name', 'p.date_time', 'u.username as organizer')
    .join('users as u', { 'p.organizer_id': 'u.user_id' })
    .where({ pl_id: id })
    .first();
};

module.exports = {
  findUserById,
  findUserByName,
  findPotluckById,
};
