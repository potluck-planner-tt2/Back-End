const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const authRouter = require('./auth/auth-router'); 

const server = express();

//GLOBAL MIDDLEWARE
server.use(helmet());
server.use(cors());
server.use(morgan("tiny"));
server.use(express.json());

server.use('/api/auth', authRouter); 

server.get("/", (req, res) => {
  res.status(200).json({ message: "API up and running" });
});

module.exports = server;
