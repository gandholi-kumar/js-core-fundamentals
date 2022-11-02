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

fun.myCall(obj, 1, 2, 3);
