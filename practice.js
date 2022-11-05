Function.prototype.myCall = function (thisArg, ...args) {
  thisArg = thisArg === null || thisArg === undefined ? window : thisArg;
  thisArg = Object(thisArg);
  let symKey = Symbol();
  thisArg[symKey] = this;
  let result = thisArg[symKey](...args);
  delete thisArg[symKey];
  return result;
};

let obj = { name: 'sumit' };

function fun(a, b, c) {
  console.log(this === obj, a, b, c);
}

// fun.myCall(obj, 1, 2, 3);

// Generator function
let counter = 0;

function* printNumbers() {
  let timer = setTimeout(() => {
    counter++;
  }, 100);
  console.log(timer);
  console.log(counter);

  yield counter;
  counter += timer;
  yield counter;

  counter -= timer;
  yield counter;
}

const k = printNumbers();

// console.log(k.next());
// setTimeout(() => {
//   console.log(k.next());
// }, 1000);
// setTimeout(() => {
//   console.log(k.next());
// }, 5000);
// setTimeout(() => {
//   console.log(k.next());
// }, 5000);
// console.log(k.next());
// for (let value of k ){
//   console.log(value);
// }


function *custGen() {
  const vlaues = 'values1';
  console.log(vlaues);
  let x = yield '1';

  console.log(x);
  console.log('some one ' + vlaues);
  yield '2';
  let y = yield;
  console.log('testing 2');
  console.log(y);
  yield '3';
}

const genCust = custGen();

// console.log(genCust.next());
// console.log(genCust.next(2));
// console.log(genCust.next());
// console.log(genCust.next());
// console.log(genCust.next(3));

// ----------------------------------------------- //

// ----------------------------------------------- //

