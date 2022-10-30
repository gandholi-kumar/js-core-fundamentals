// Sum of N numbers
console.log(sumOfN(1)(2)(4)());
function sumOfN(a) {
  return function (b) {
    return b ? sumOfN(a + b) : a;
  };
}

const ES6MultipleOfN = (a) => (b) => b ? ES6MultipleOfN(a * b) : a;
console.log(ES6MultipleOfN(1)(2)(4)());
