const request = require('supertest');
const { app, name } = require('../app');

describe('GET /', () => {
    it('should return 200 status and correct message', async () => {
        const res = await request(app).get('/');
        
        expect(res.status).toBe(200);
        // Fixed: Changed single quotes to backticks
        expect(res.text).toBe(`Welcome to ShopEase from ${name}!`); 
    });
});