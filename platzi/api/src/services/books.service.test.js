const BooksService = require('./books.service');
const { generateBooks } = require('../fakes/book.fake');

// [fake]
const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter I',
  },
  {
    _id: 2,
    name: 'Harry Potter II',
  },
];

// spy
const mockGetAll = jest.fn();

// suplantar todo el comportamiento [stub]
// mock tecnique
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  // getAll: () => [...fakeBooks],
  getAll: mockGetAll,
  create: () => { fakeBooks.push({ _id: 3, name: 'Harry Potter III' }); },
})));

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    // clean all mocks
    jest.clearAllMocks();
  });

  // describe('test for createBooks', () => {
  //   it('should return 3rd book', async () => {
  //     // Arrange
  //     // Act
  //     await service.createBook({});
  //     const books = await service.getBooks({});
  //     // Assert
  //     expect(books[2]).toEqual({ _id: 3, name: 'Harry Potter III' });
  //   });
  // });

  // describe('test for getBooks', () => {
  //   it('should return a book list', async () => {
  //     // Arrange
  //     // Act
  //     const books = await service.getBooks({});
  //     // Assert
  //     expect(books.length).toEqual(3);
  //   });

  //   it('should return a book name Harry Potter', async () => {
  //     // Arrange
  //     // Act
  //     const books = await service.getBooks({});
  //     // Assert
  //     expect(books[0].name).toEqual('Harry Potter I');
  //   });
  // });

  describe('spy test', () => {
    it('should return a book list', async () => {
      // Arrange
      const fakesBooks = generateBooks(4);
      mockGetAll.mockResolvedValue(fakesBooks);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(4);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
      expect(books[0].name).toEqual(fakesBooks[0].name);
    });
  });
});
