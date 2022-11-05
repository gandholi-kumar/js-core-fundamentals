// #region Debounce

// Debounce
// it triggers event based on limit, on difference in between two consecutive events
var counter = 1;

const btnClick = function (...args) {
  console.log(`Testing debounce ${args}`);
};

const customDebounce = function (fn, lmt) {
  let timer;
  return function (...args) {
    const context = this;
    const params = args;

    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, params);
    }, lmt);
  };
};
const executeDebounce = customDebounce(btnClick, 300);

document.querySelector('#searchbar2').addEventListener('keydown', (e) => {
  executeDebounce(counter++, 'param1', 'param2');
});

// #endregion

// #region Throttling Rifle

// Scenario: We can kill an enemy based on rifle reloading time
// Player had to wait till the reloading is completed
// Ignore the triggers within the reload time.

const rifleReloadTime = {
  AWM: 2000,
  M416: 1000,
};

const killEnemy = function (rifle) {
  console.log(`Killed the enemy with ${rifle}`);
};

const customThrottling = function (fn) {
  let shoot = true;
  return function (...args) {
    const context = this,
      params = args.slice(1),
      delay = args[0];

    if (shoot) {
      fn.apply(context, params);
      shoot = false;
      setTimeout(() => {
        shoot = true;
      }, delay);
    }
  };
};

const executeEnemy = customThrottling(killEnemy);

document.querySelector('#rifle').addEventListener('click', (e) => {
  const typeOfRifle = e.target.value;
  let delay = rifleReloadTime[typeOfRifle] ?? 0;

  executeEnemy(delay, typeOfRifle);
});

// #endregion
