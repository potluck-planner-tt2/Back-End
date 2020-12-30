const jwt = require('jsonwebtoken');

const Auth = require('../routers/auth/auth-model');
const jwtSecret = require('../../config/secret');

const validateCreds = (req, res, next) => {
  const creds = req.body;
  if (!creds.password || !creds.username) {
    res.status(400).json('Username and Password Required');
  } else {
    next();
  }
};

const unAvailability = async (req, res, next) => {
  const { username } = req.body;
  const user = await Auth.findBy({ username: username });
  if (user) {
    res.status(400).json('Username taken - please select another');
  } else {
    next();
  }
};

const restrictPath = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json('Token Required');
  } else {
    jwt.verify(token, jwtSecret, (error, decoded) => {
      if (error) {
        res.status(401).json('Invalid Token');
      } else {
        req.decodedToken = decoded;
        next();
      }
    });
  }
};

module.exports = {
  validateCreds,
  unAvailability,
  restrictPath,
};
