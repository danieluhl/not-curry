// note: this is not actually currying but there's no good name for it that I've found
const curry = (fn, ...args) => {
  // code here
};

const add = (a, b, c) => a + b + c;

const curAddFive = curry(add, 5);
const addFiveSeven = curAddFive(7);

console.log(addFiveSeven(2)); // 14
console.log(addFiveSeven(4)); // 16
