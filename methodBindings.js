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

  obj.call = this;
  return obj.call(...args);
};
console.log(getFullName.customCall(emp2, 'Bangalore', 'Karnataka'));

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
