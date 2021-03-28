const express = require('express');
const Sessioncontroller = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', Sessioncontroller.store);

module.exports = routes;