const validator = require('./validator.js');

describe('Validator Middleware', () => {
    let req = {};
    let res = {};
    let next = jest.fn();


    // Run before each test
    beforeEach(() => {
        // Resetting query object before each test
        req.query = {};
    });

    test('Shjould move to the next middleware when name is provided', () => {
        // mocking request with name query parameter 
        req.query.name = 'John';

        // Call the validator middleware function
        validator(req, res, next);

        // Assert that the next was called without arguments
        expect(next).toHaveBeenCalledWith();
    });

    test('Should throw and error when name is not provided', () => {
        // call validator middleware without a name in the query
        validator(req, res, next);

        // Assert that the next was called with an error argument
        expect(next).toHaveBeenCalledWith('Name not provided in query string.');
    });
});