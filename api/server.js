const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
//Need authorization middleware - check for valid token before granting acess to routes
// const authorization = require('../api/middleware/auth-middleware')

const authRouter = require('./routers/auth/auth-router');
const usersRouter = require('./routers/users/users-router');
const potlucksRouter = require('./routers/potlucks/potlucks-router');
const foodRouter = require('./routers/foods/foods-router');
const potluckRouter = require('./routers/potluck/potluck-router');
const { restrictPath } = require('./middleware/auth-middleware');

const server = express();

//GLOBAL MIDDLEWARE
server.use(helmet());
server.use(cors());
server.use(morgan('tiny'));
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', restrictPath, usersRouter);
server.use('/api/potlucks', restrictPath, potlucksRouter);
server.use('/api/foods', restrictPath, foodRouter);
server.use('/api/potluck', restrictPath, potluckRouter);

server.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'API up and running', env: `${process.env.DB_ENV}` });
});

module.exports = server;
