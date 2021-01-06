const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

const jwtSecret = require('../../../config/secret');
const User = require('./auth-model');
const Users = require('../users/users-model');
const {
  validateCreds,
  unAvailability,
} = require('../../middleware/auth-middleware');

const createToken = (user) => {
  const payload = {
    id: user.id,
    username: user.username,
  };
  const options = {
    expiresIn: '1h',
  };
  return jwt.sign(payload, jwtSecret, options);
};

//END POINTS
router.post('/register', validateCreds, unAvailability, async (req, res) => {
  const newUser = req.body;
  const rounds = process.env.BCRYPT_ROUNDS || 2;

  const hash = bcryptjs.hashSync(newUser.password, rounds);
  newUser.password = hash;

  try {
    const addedUser = await User.addUser(newUser);
    const userInfo = await Users.findBy(newUser.username);
    res.status(200).json(userInfo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/login', validateCreds, async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findBy({ username: username });
    if (user && bcryptjs.compareSync(password, user.password)) {
      const token = createToken(user);
      res.status(200).json({
        message: `Welcome, ${user.username}`,
        token: token,
        username: user.username,
        user_id: user.user_id,
      });
    } else {
      res.status(401).json('Invalid Credentials');
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
