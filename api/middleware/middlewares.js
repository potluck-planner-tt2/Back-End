const User = require('../routers/users/users-model');
const Potluck = require('../routers/potlucks/potlucks-model');

//USERS MIDDLEWARE
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
    res.status(400).json({ message: 'Include a valid username' });
  } else {
    next();
  }
};

//POTLUCKS MIDDLEWARE
const validatePLID = async (req, res, next) => {
  const { id } = req.params;
  const potluck = await Potluck.findPotluckById(id); 
  
  if (!potluck) {
    res.status(404).json({ message: "Invalid Potluck Id"});
  } else {
    next ();
  }
};

const validatePLCreds = (req, res, next) => {
  const {name, organizer_id} = req.body; 

  if (!name || !organizer_id) {
    res.status(400).json({ message: 'Please include a valid username and id' });
  } else {
    next();
  }
};

module.exports = {
  validateUserId,
  validateUserName,
  validatePLCreds,
  validatePLID
};
