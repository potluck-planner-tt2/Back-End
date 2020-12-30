const db = require('../../../data/dbConfig');

const addUser = async (user) => {
  const [id] = await db('users').insert(user);
  return db('users').where('user_id', id).first();
};

const findBy = (filter) => {
  return db('users').where(filter).first();
};

module.exports = {
  addUser,
  findBy,
};
