const Person = require('./06-person');

describe('IMC test', () => {
  let person;
  beforeEach(() => {
    person = new Person('Adrian', '70', 1.76);
  });

  it('should return normal', () => {
    // AAA ( Arrange | Act | Assert )

    // Arrange
    person.weight = 70;
    // Act
    const imc = person.calcIMC();
    // Assert
    expect(imc).toBe('normal');
  });

  it('should return overweight level 1', () => {
    person.weight = 85;
    const imc = person.calcIMC();
    expect(imc).toBe('overweight level 1');
  });
});
