const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

const jwtSecret = require("../../config/secret");
const User = require("./auth-model");

const createToken = (user) => {
  const payload = {
    id: user.id,
    username: user.username,
  };
  const options = {
    expiresIn: "1h",
  };
  return jwt.sign(payload, jwtSecret, options);
};

//END POINTS
router.post("/register", async (req, res) => {
  const newUser = req.body;
  const rounds = process.env.BCRYPT_ROUNDS || 2;

  const hash = bcryptjs.hashSync(newUser.password, rounds);
  newUser.password = hash;

  try {
    const addedUser = await User.addUser(newUser);
    res.status(200).json(addedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
