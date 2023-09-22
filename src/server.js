'use strict';

const express = require('express');
const notFound = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');

const app = express();

app.get('/', (req, res, next) => {
    res.status(200).send("Welcome to the home page!");
});

app.get('/person', (req, res, next) => {
    const { name } = req.query;

    // check if name is present in the query string
    if (name) {
        res.json({ name });
    } else {
        // force a 500 error if name is not present
        res.status(500).send("Server Error: Name not provided in query string.");
    }
});

app.get('/bad-route', (req, res, next) => {
    next('Testing Error!');
});

app.get('*', notFound);
app.use(errorHandler);


const start = (PORT) => { 
    app.listen(PORT, () => console.log(`The server is running in PORT ${PORT}`)); 
}


module.exports = { start, app };