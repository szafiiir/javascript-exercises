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

const multiply = function() {
  
};

const power = function() {
	
};

const factorial = function() {
	
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
