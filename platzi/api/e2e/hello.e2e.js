const request = require('supertest');
const createApp = require('../src/app');

describe('Hello endpoint', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET] /', () => {
    it('should return "Hello World!"', async () => {
      const response = await request(app).get('/');
      // expect(response.status).toEqual(200);
      expect(response.text).toEqual('Hello World!');
    });
  });
});
