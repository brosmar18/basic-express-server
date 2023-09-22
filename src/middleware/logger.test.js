const logger = require('./logger.js');

describe('Logger Middleware', () => {

    let req = {};
    let res = {};
    let next = jest.fn(); // Mocking next function
    let consoleSpy;
  
    // Run before each test
    beforeEach(() => {
        // View console to check if it gets called and to supress logging 
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();

        // Mock request method and path 
        req.method = 'GET';
        req.path = '/test';
    });

    // Run after each test
    afterEach(() => {
        // Restore original console.log function after each test
        consoleSpy.mockRestore();
    });

    test('Should log the method and path', () => {
        // call the logger middleware
        logger(req, res, next);

        // Assert that console.log was called with the right parameters
        expect(consoleSpy).toHaveBeenCalledWith('REQUEST METHOD: GET, PATH: /test');
    });

    test('Should call next() function', () => {
        // Call the logger middleware
        logger(req, res, next);

        // Assesrt that the next function was called
        expect(next).toHaveBeenCalled();
    });
  });