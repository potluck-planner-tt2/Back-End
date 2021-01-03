const router = require('express').Router();
const Potluck = require('./potluck-model');

//ATTENDANCE MANAGEMENT ENPOINTS
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

router.post('/invite', async (req, res) => {
  const { pl_id, user_id } = req.body;

  try {
    const invite = await Potluck.inviteUser(user_id, pl_id);
    res.status(200).json(invite);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//POTLUCK FOODS MANAGEMENT

router.get('/:id/foodlist', async (req, res) => {
  const { id } = req.params;

  try {
    const foods = await Potluck.getPLFoods(id);
    res.status(200).json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/:id/foodlist', async (req, res) => {
  const { id } = req.params;
  const { food_id, owner_id } = req.body;

  try { 
    const newFoodItem = await Potluck.addFoodItem(id, food_id, owner_id);
    res.status(200).json(newFoodItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id/foodlist', async (req, res) => {
  const change = req.body; 

  try { 
    const edit = await Potluck.editFoodItem(change); 
    res.status(200).json(edit);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

router.delete('/foodlist/:id', async (req, res) => {
  const { id } = req.params; 

  try {
    const deleted = await Potluck.deleteFoodItem(id); 
    res.status(200).json(deleted);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
