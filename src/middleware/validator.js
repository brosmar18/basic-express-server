'use strict';

module.exports = (req, res, next) => {
    const { name } = req.query;

    // Check if name is present in the query string
    if (name) {
        next(); // Send the request through
    } else {
        next('Name not provided in query string.'); // Force error. 
    }
};