const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const server = express();

//GLOBAL MIDDLEWARE
server.use(helmet());
server.use(cors());
server.use(morgan("tiny"));
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "API up and running" });
});

module.exports = server;
