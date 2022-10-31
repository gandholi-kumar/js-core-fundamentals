// #region Debounce

// Debounce
// it triggers event based on limit, on difference in between two consecutive events
var counter = 1;

const btnClick = function (...args) {
  console.log(`Testing debounce ${args}`);
};

const customDebounce = function (fn, lmt) {
  let timer;
  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, lmt);
  };
};
const executeDebounce = customDebounce(btnClick, 300);
document.querySelector("#searchbar2").addEventListener("keyup", (e) => {
  executeDebounce(counter++, "param1", "param2");
});

// #endregion

// #region Throttling Rifle need to work

const AWM = function () {
  console.log("this is awm");
  return 2000;
};

const M416 = function () {
  console.log("this is M416");
  return 100;
};

const killEnemy = function () {
  console.log("Killed the enemy");
};

const customThrottling = function (fn, delay) {
  let shoot = true;
  return function () {
    const context = this,
      params = arguments;

    console.log("arguments: ", arguments);
    if (shoot) {
      fn.apply(context, params);
      document.getElementById;
      shoot = false;
      setTimeout(() => {
        shoot = true;
      }, delay);
    }
  };
};

document.querySelector("#rifle").addEventListener("click", (e) => {
  const typeOfRifle = e.target.value;
  let delay = 0;
  if (typeOfRifle === "M416") {
    delay = M416();
  } else if (typeOfRifle === "AWM") {
    delay = AWM();
  }
  console.log("delay", delay);
  const executeThrottling = customThrottling(killEnemy, delay);

  executeThrottling(typeOfRifle);
});

// #endregion

// const multiple = function (a) {
//   return function (b) {
//     return a * b;
//   };
// };

// const TwoMultiple = multiple(2);
// console.log(TwoMultiple(3));