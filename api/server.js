const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const auth = require('../api/middleware/auth-middleware')

const authRouter = require('./auth/auth-router');
const usersRouter = require('../routers/users/users-router') 
const potluckRouter = require('../routers/potlucks/potlucks-router')

const server = express();

//GLOBAL MIDDLEWARE
server.use(helmet());
server.use(cors());
server.use(morgan("tiny"));
server.use(express.json());

server.use('/api/auth', authRouter); 
server.use('/api/users', auth, usersRouter)
server.use('/api/potlucks', auth, potluckRouter)


server.get("/", (req, res) => {
  res.status(200).json({ message: "API up and running" });
});

module.exports = server;
