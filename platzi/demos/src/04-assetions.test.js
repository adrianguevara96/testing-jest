// matchers
describe('test obj', () => {
  it('obj', () => {
    const data = { name: 'Adrian' };
    data.lastname = 'Guevara';
    expect(data).toEqual({ name: 'Adrian', lastname: 'Guevara' });
  });

  it('null', () => {
    const data = null;
    expect(data).toBeNull();
    expect(data).toBeDefined();
    expect(data).not.toBeUndefined();
  });

  it('booleans', () => {
    expect(true).toEqual(true);
    expect(false).toEqual(false);

    expect(0).toBeFalsy();
    expect('').toBeFalsy();
    expect(false).toBeFalsy();
  });

  it('strings', () => {
    expect('Adrian').toMatch(/dri/gi);
  });

  it('list / arrays', () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(numbers).toContain(3);
  });
});
