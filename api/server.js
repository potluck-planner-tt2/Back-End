const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
//Need authorization middleware - check for valid token before granting acess to routes
// const authorization = require('../api/middleware/auth-middleware')

const authRouter = require('./routers/auth/auth-router');
const usersRouter = require('./routers/users/users-router'); 
const potluckRouter = require('./routers/potlucks/potlucks-router');
const foodRouter = require('./routers/foods/foods-router');

const server = express();

//GLOBAL MIDDLEWARE
server.use(helmet());
server.use(cors());
server.use(morgan("tiny"));
server.use(express.json());

server.use('/api/auth', authRouter); 
server.use('/api/users', usersRouter);
server.use('/api/potlucks', potluckRouter);
server.use('/api/foods', foodRouter);


server.get("/", (req, res) => {
  res.status(200).json({ message: "API up and running" });
});

module.exports = server;
