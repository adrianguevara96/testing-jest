const sum = require('./01-sum');

/*
*   to be: string, number, boolean
*   to equal: object, array
*/

// one test
describe('first test', () => {
  // test()
  it('adds 1 + 2 to equal 3', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });
});
