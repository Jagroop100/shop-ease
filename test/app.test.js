const request = require('supertest');
const { app, name } = require('../app');

describe('ShopEase API', () => {

    test('GET / returns welcome message', async () => {

        const response = await request(app).get('/');

        expect(response.status).toBe(200);
        expect(response.text).toContain('ShopEase');
    });

    test('GET /products returns products', async () => {

        const response = await request(app).get('/products');

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

});