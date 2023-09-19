const {
  sum, multiply, divide, prom,
} = require('./02-math');

describe('math test', () => {
  // test()
  it('adds 1 + 3 to equal 4', () => {
    const result = sum(1, 3);
    expect(result).toBe(4);
  });

  it('should be 4', () => {
    const result = multiply(1, 4);
    expect(result).toBe(4);
  });

  it('should divide for zero', () => {
    const result = divide(6, 0);
    expect(result).toBeNull();

    const result2 = divide(5, 0);
    expect(result2).toBeNull();
  });

  it('prom should be 20', () => {
    const result = prom([20, 20, 20, 20, 20]);
    expect(result).toBe(20);
  });

  it('prom should be 0', () => {
    const result = prom([]);
    expect(result).toBe(0);
  });
});
