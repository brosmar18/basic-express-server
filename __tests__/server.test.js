const { app } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('API Server', () => {
    // 404 on a bad route
    test('Should respond with 404 for non-existent routes', async () => {
        const response = await mockRequest.get('/non-existent-route');

        expect(response.status).toBe(404);
    });

    // 404 on bad method
    test('Should respond with aa 404 for a bad method', async () => {
        const response = await mockRequest.post('/');
        expect(response.status).toBe(404);
    });

    // 500 if no name in the query string
    test('Should respond with 500 if no name in the query string', async () => {
        const response = await mockRequest.get('/person');
        expect(response.status).toBe(500);
        expect(response.body.message).toBe('Server Error: Name not provided in query string.');
    });

    // 200 if the name is in the query string
    test('Should respond with 200 if name is in the query string', async () => {
        const response = await mockRequest.get('/person?name=John');
        expect(response.status).toBe(200);
    });

    // Given a name in the query string, the output object is correct
    test('Should output a correct object if name is in the query string', async () => {
        const name = 'John';
        const response = await mockRequest.get(`/person?name=${name}`);
        expect(response.body).toEqual({ name });
    });
});