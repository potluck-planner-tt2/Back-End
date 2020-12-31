const router = require('express').Router();
const Attendance = require('./attendance-model');

router.get('/', async (req, res) => {
  try {
    const allAttendance = await Attendance.getAllAttendance();
    res.status(200).json(allAttendance);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
