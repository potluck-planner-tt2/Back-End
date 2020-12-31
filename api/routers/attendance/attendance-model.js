const db = require('../../../data/dbConfig');

const getAllAttendance = () => {
  return db('potluck_attendance as pa')
    .select('pa.id', 'p.name', 'u.username', 'pa.confirmed')
    .join('potlucks as p', { 'pa.pl_id': 'p.pl_id' })
    .join('users as u', { 'pa.user_id': 'u.user_id' });
};

module.exports = {
  getAllAttendance,
};
