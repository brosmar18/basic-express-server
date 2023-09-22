'use strict';

require('dotenv').config();

const PORT = process.env.PORT || 5000;

const { start } = require('./src/server.js');

start(PORT);