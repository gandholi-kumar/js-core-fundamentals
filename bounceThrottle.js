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
document.querySelector('#searchbar2').addEventListener('keyup', (e) => {
  executeDebounce(counter++, 'param1', 'param2');
});

// #endregion

// #region Throttling Rifle need to work

const rifleRecoils = {
  AWM: 2000,
  M416: 1000,
};

console.log(rifleRecoils['AWM']);

const AWM = function () {
  console.log('this is awm');
  return 2000;
};

const M416 = function () {
  console.log('this is M416');
  return 100;
};

const killEnemy = function () {
  console.log('Killed the enemy');
};

const customThrottling = function (fn) {
  let shoot = true;
  return function (...args) {
    const context = this,
      params = args.slice(1);

    console.log('arguments: ', arguments);
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
  console.log('Rifle recoils', rifleRecoils[typeOfRifle]);
  let delay = rifleRecoils[typeOfRifle] ?? 0;

  executeEnemy(delay);
});

// #endregion
