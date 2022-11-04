// #region call, apply & bind
const emp1 = {
  firstName: 'sai',
  lastName: 'gandholi',
  email: 'sai@arun.com',
};

const emp2 = {
  firstName: 'kiran',
  lastName: 'keet',
};

const getFullName = function (empId, emailID) {
  return `${this.firstName} ${this.lastName} ${empId} ${emailID}`;
};

// Call - accepts individual parameters
console.log(getFullName.call(emp1, '1', '1@gmail.com'));

// Apply - accepts list of parameters
console.log(getFullName.apply(emp2, ['2', '2@gmail.com']));

// Bind - accepts params and return a callback function
const callGetFullName = getFullName.bind(emp1, '3', '3@gmail.com');
console.log(callGetFullName());

// Custom Call
Function.prototype.customCall = function (obj = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error(`${this} is not callable`);
  }
  obj = obj === null || obj === undefined ? window : obj;
  obj = Object(obj);
  let symbol = Symbol();
  obj[symbol] = this;
  const objCall = obj[symbol](...args);
  delete obj[symbol];
  return objCall;
};
console.log(getFullName.customCall(emp2, 'Bangalore', 'Karnataka'));
console.log(getFullName.customCall(emp2, 'Bangalore1', 'Karnataka1'));

// Custom Apply
Function.prototype.customApply = function (obj = {}, args = []) {
  if (typeof this !== 'function') {
    throw new Error(`${this} is not callable`);
  }

  if (!Array.isArray(args)) {
    throw new TypeError('args must be an Array');
  }

  obj.apply = this;
  return obj.apply(...args);
};
console.log(
  getFullName.customApply(emp2, ['Himalayaasdfn', 'Himachal pradesh'])
);

// Custom Bind
Function.prototype.customBind = function (...args) {
  let obj = this;
  const params = args.slice(1);

  return function (...parameters) {
    return obj.customApply(args[0], [...params, ...parameters]);
  };
};
let customBind = getFullName.customBind(emp2, 'vizag', 'AP');
console.log(customBind());
// #endregion call, apply & bind

// #region Map
//-------------- MAP -------------//
const mapInput = [1, 2, 3, 4];

const square = (n) => n * n;
const cube = function (n) {
  return n * n * n;
};

// // Map usage
// console.log(mapInput.map(square));
// console.log(mapInput.map(cube));

//------------------ Custom  MAP ------------------//
Array.prototype.customMap = function (fn) {
  if (!Array.isArray(this)) {
    return new TypeError(`${this} is not an array`);
  }
  const context = this;

  const returnValue = [];
  for (let i = 0; i < context.length; i++) {
    returnValue.push(fn.call(null, context[i]));
  }
  return returnValue;
};
// Custom Map usage
console.log(mapInput.customMap(square));
console.log(mapInput.customMap(cube));
// #endregion Map

// #region Reduce
//----------- Reduce -----------//
const reduceInput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = function (acc, val) {
  return (acc = acc + val);
};
const max = function (acc, val) {
  if (acc < val) {
    acc = val;
  }
  return acc;
};
const min = function (acc, val) {
  if (acc > val) {
    acc = val;
  }
  return acc;
};
// Reduce usage
console.log(reduceInput.reduce(sum, 0));
console.log(reduceInput.reduce(max, 0));
console.log(reduceInput.reduce(min, Infinity));

//------------------ Custom Reduce ------------------//
Array.prototype.customReduce = function (fn, arg) {
  if (!Array.isArray(this)) {
    return new TypeError(`${this} is not an array`);
  }

  if (arg === undefined) {
    return new Error(`${arg} must be provided`);
  }

  const context = this;
  let accumulator = arg;

  for (let i = 0; i < context.length; i++) {
    accumulator = fn.call(null, context[i], accumulator);
  }

  return accumulator;
};
console.log(reduceInput.customReduce(sum, 0));
console.log(reduceInput.customReduce(max, 0));
console.log(reduceInput.customReduce(min, Infinity));

// #endregion Reduce
