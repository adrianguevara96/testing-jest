const request = require('supertest');
const { MongoClient } = require('mongodb');

const { config } = require('../src/config/index');
const createApp = require('../src/app');

const DB_NAME = config.dbName;
const MONGO_URL = config.dbUrl;

describe('Hello endpoint', () => {
  let app = null;
  let server = null;
  let database = null;
  let client = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    client = new MongoClient(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await database.dropDatabase();
    await client.close();
    await server.close();
  });

  describe('test for [GET] /api/v1/books', () => {
    it('should return a list books', async () => {
      // Arrange
      const seedData = await database.collection('books').insertMany([
        {
          name: 'Book I',
          year: 1998,
          author: 'Adrian',
        },
        {
          name: 'Book II',
          year: 1999,
          author: 'Adrian',
        },
      ]);

      const response = await request(app).get('/api/v1/books');
      expect(response.body.length).toEqual(seedData.insertedCount);
    });
  });
});
