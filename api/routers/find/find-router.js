const router = require('express').Router();
const Find = require('./find-model');

router.get('/user', async (req, res) => {
  const { username } = req.body;

  try {
    const user = await Find.findUserByName(username);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/user/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Find.findUserById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/potluck/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const potluck = await Find.findPotluckById(id);
    res.status(200).json(potluck);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

module.exports = router;

/* 
/find/user/:id
/find/user/username

find/potluck/:id
find/potluck/name

find/food/:id
find/food/name

find/potluck/user
find/potluck/attendance

find/potluck/food
find/potluck/food/user

*/
