const { randBook, randProduct } = require('@ngneat/falso');

const generateOneBook = () => {
  const book = randBook();
  const product = randProduct();
  return {
    _id: 1,
    name: book.title,
    price: product.price,
  };
};

const generateBooks = (size) => {
  const limit = size ?? 10;
  const fakeBooks = [];
  for (let i = 0; i < limit; i += 1) {
    fakeBooks.push(generateOneBook());
  }
  return [...fakeBooks];
};

module.exports = { generateOneBook, generateBooks };
