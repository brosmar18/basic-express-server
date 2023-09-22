'use strict';

const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();

app.use('/', (req, res, next) => {
    res.status(200).send("Hello World!");
})

const start = () => {
    app.listen(PORT, () => console.log(`The server is running in PORT ${PORT}`));
}

module.exports = { start, app };