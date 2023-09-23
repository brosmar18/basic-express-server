'use strict';

const express = require('express');
const notFound = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');

const app = express();

// logger middleware setup for all routes
app.use(logger);

app.get('/', (req, res, next) => {
    res.status(200).send("Welcome to the home page!");
});

app.get('/person', validator, (req, res, next) => {
    const { name } = req.query;

    res.json({ name });
});


app.use('*', notFound);
app.use(errorHandler);


const start = (PORT) => { 
    app.listen(PORT, () => console.log(`The server is running in PORT ${PORT}`)); 
}


module.exports = { start, app };