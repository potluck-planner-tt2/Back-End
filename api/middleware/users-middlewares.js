const User = require('../routers/users/users-model');

const validateUserId = async (req, res, next) => {
  const { id } = req.params;
  const validUser = await User.findById(id);

  if (!validUser) {
    res.status(400).json({ message: 'Invalid User Id' });
  } else {
    next();
  }
};

const validateUserName = (req, res, next) => {
  const { username } = req.body; 
  if (!username) {
    res.status(400).json({message: 'Include a valid username'}); 
  } else { 
    next ();
  }
};

module.exports = {
  validateUserId, 
  validateUserName
};
