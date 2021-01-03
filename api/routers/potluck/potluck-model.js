const db = require('../../../data/dbConfig');

//ATTENDANCE QUERIES
const getAttendance = (id) => {
  return db('potluck_attendance as pa')
    .select('pa.id', 'p.name', 'u.username', 'pa.confirmed')
    .join('potlucks as p', { 'pa.pl_id': 'p.pl_id' })
    .join('users as u', { 'pa.user_id': 'u.user_id' })
    .where('pa.pl_id', id);
};

const getUserAttendance = (id) => {
  return db('potluck_attendance as pa')
    .select('pa.id', 'p.name', 'u.username', 'pa.confirmed')
    .join('potlucks as p', { 'pa.pl_id': 'p.pl_id' })
    .join('users as u', { 'pa.user_id': 'u.user_id' })
    .where('pa.user_id', id);
};

const editUserAttendance = (id, change) => {
  return db('potluck_attendance').where({ id: id }).update(change);
};

const inviteUser = (userId, plId) => {
  const formattedInvite = { pl_id: plId, user_id: userId };
  return db('potluck_attendance').insert(formattedInvite);
};

//FOODS QUERIES
const getPLFoods = (plId) => {
  return db('event_foods as ef')
    .select('ef.id', 'p.name', 'fi.name', 'u.username as owner')
    .join('potlucks as p', { 'ef.pl_id': 'p.pl_id' })
    .join('users as u', { 'ef.owner_id': 'u.user_id' })
    .join('food_items as fi', { 'ef.food_id': 'fi.food_id' })
    .where('ef.pl_id', plId);
};

const addFoodItem = (plId, foodId, ownerId) => {
  const newFoodItem = {
    pl_id: plId,
    food_id: foodId,
    owner_id: ownerId,
  };

  return db('event_foods').insert(newFoodItem);
};

module.exports = {
  getAttendance,
  getUserAttendance,
  editUserAttendance,
  inviteUser,
  getPLFoods,
  addFoodItem,
};
