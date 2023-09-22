'use strict';

const express = require('express');
const PORT = process.env.PORT || 3001;
const notFoundError = require('./error-handlers/404.js');

const app = express();

app.get('/', (req, res, next) => {
    res.status(200).send("Welcome to the home page!");
});

app.get('/person', (req, res, next) => {
    const { name } = req.query;

    // check if name is present in the query string
    if (name) {
        res.json({ name: "name provided" });
    } else {
        // force a 500 error if name is not present
        res.status(500).send("Server Error: Name not provided in query string.");
    }
});

app.get('*', notFoundError);


const start = () => {
    app.listen(PORT, () => console.log(`The server is running in PORT ${PORT}`));
}

module.exports = { start, app };