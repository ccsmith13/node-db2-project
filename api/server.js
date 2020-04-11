const express = require("express");
const carRoutes = require('../cars/carRoutes');
const server = express();

server.use(express.json());
server.use('/api/cars', carRoutes);

module.exports = server;
