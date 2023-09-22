const { app } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('API Server', () => {
    // 404 on a bad route
    test('Should respond with 404 for non-existent routes', async () => {
        const response = await mockRequest.get('/non-existent-route');

        expect(response.status).toBe(404);
    });
});