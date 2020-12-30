const db = require('../../../data/dbConfig');

module.exports = {
  findAll,
  findBy,
  findById,
  deleteUser,
  editUser,
};

function findAll() {
  return db('users').select('user_id', 'username');
}

function findBy(filter) {
  return db('users').select('user_id', 'username').where(filter);
}

function findById(id) {
  return db('users')
    .where({ user_id: id })
    .first()
    .select('user_id', 'username');
}

function deleteUser(id) {
  return db('users').where({ user_id: id }).delete();
}

function editUser(change, id) {
  return db('users').where({ user_id: id }).update(change);
}
