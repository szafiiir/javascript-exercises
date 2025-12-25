const add = function(a, b) {
	let sum = a + b;
  return sum;
};

const subtract = function(a, b) {
	let sum = a - b;
  return sum;
};

const sum = function(array) {
  const initialValue = 0;
  const sumWithInitial = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );
  return sumWithInitial;
};

const multiply = function(array) {
  let multiplySum = 1;
  for (let i = 0; i < array.length; i++) {
    multiplySum *= array[i];
  }
  return multiplySum;
};

const power = function(a, b) {
	let powerSum = a ** b;
  return powerSum;
};

const factorial = function(n) {
    let factorialSum = 1;
    for (let i = 1; i <= n; i++) {
        factorialSum *= i;
    }
    return factorialSum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
