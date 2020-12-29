const User = require("../routers/auth/auth-model");

const validateCreds = (req, res, next) => {
  const creds = req.body;
  if (!creds.password || !creds.username) {
    res.status(400).json("Username and Password Required");
  } else {
    next();
  }
};

const unAvailability = async (req, res, next) => {
  const { username } = req.body;
  const user = await User.findBy({ username: username }); 
  if (user) {
    res.status(400).json("Username taken - please select another"); 
  } else { 
    next();
  }
};

module.exports = {
  validateCreds,
  unAvailability
};
