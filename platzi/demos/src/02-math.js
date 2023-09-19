function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return null;
  return a / b;
}

function prom(array) {
  if (array.length === 0) return 0;

  // let sum = 0;
  // for (const value of array) {
  //   sum += value;
  // }
  // return sum / array.length;

  const sum2 = array.reduce((total, item) => total + item, 0);
  return sum2 / array.length;
}

module.exports = {
  sum, multiply, divide, prom,
};
