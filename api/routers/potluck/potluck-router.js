const router = require('express').Router();
const Potluck = require('./potluck-model');

router.get('/:id', async (req, res) => {
  const { id } = req.params; 

  try {
    const allAttendance = await Potluck.getAttendance(id);
    res.status(200).json(allAttendance);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
