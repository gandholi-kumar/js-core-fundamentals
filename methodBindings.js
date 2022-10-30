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
console.log(getFullName.call(emp1, '12323', 'sai@gmail.com'));

// Apply - accepts list of parameters
console.log(getFullName.apply(emp2, ['12323', 'sai@gmail.com']));

// Bind - accepts params and return a callback function
const callGetFullName = getFullName.bind(emp1, '12323', 'sai@gmail.com');
console.log(callGetFullName());
