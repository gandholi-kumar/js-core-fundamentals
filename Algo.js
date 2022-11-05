/*
  Sum of N numbers
*/
function sumOfN(a) {
  return function (b) {
    return b ? sumOfN(a + b) : a;
  };
}
const ES6MultipleOfN = (a) => (b) => b ? ES6MultipleOfN(a * b) : a;
// console.log(ES6MultipleOfN(1)(2)(4)());
// console.log(sumOfN(1)(2)(4)());

/*
  Find the most repeated value
*/
const arr = ['one', 'three', 'two', 'two', 'two', 'three', 'two', 'three'];
const arr1 = ['one'];

function maxIteratedValue(arr) {
  let map = new Map();
  let maxItergatedVal = 0;

  arr.forEach((val) => {
    if (map.has(val)) {
      map.set(val, map.get(val) + 1);
      maxItergatedVal < map.get(val)
        ? (maxItergatedVal = map.get(val))
        : maxItergatedVal;
    } else {
      map.set(val, 1);
      maxItergatedVal < map.get(val)
        ? (maxItergatedVal = map.get(val))
        : maxItergatedVal;
    }
  });

  return { map, maxItergatedVal };
}

const { map, maxItergatedVal } = maxIteratedValue(arr);

let maxList = [];
for (let val of map.entries()) {
  if (maxItergatedVal === val[1]) maxList.push(val);
}

console.log(maxList);
