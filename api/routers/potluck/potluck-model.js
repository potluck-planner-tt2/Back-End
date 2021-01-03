const db = require('../../../data/dbConfig');

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

module.exports = {
  getAttendance,
  getUserAttendance,
  editUserAttendance,
  inviteUser
};
