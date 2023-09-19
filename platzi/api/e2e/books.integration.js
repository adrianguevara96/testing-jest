const request = require('supertest');

// mocking
const { generateBooks } = require('../src/fakes/book.fake');

const mockGetAll = jest.fn();

jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

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

  describe('test for [GET] /api/v1/books', () => {
    it('should return a list books', async () => {
      // do mocking
      // arrange
      const fakeBooks = generateBooks(5);
      mockGetAll.mockResolvedValue(fakeBooks);

      // act
      const response = await request(app).get('/api/v1/books');
      // assert
      expect(response.body.length).toEqual(fakeBooks.length);
    });
  });
});
