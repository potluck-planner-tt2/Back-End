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

router.get('/user/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const userPotlucks = await Potluck.getUserAttendance(id);
    res.status(200).json(userPotlucks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/confirmation/:id', async (req, res) => {
  const { id } = req.params;
  //Only need to pass in the 'attendance id' and the confirmation value
  //if confirmation value is unchanged will throw an error stating such 
  const change = req.body;

  try {
    const confirmation = await Potluck.editUserAttendance(id, change);
    res.status(200).json(confirmation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
