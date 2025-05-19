const request = require('supertest');
const app = require('../index'); // Import your Express app

describe('GET /', () => {
  it('should return a 200 status and a message', async () => {
    return request(app)
    .get("/")
    .expect('Content-Type', /json/)
    .expect(200)
    .then((res) => {
        expect(res.statusCode).toBe(200);})
  });
});