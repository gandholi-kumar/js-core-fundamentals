function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (location === 'google') {
      resolve('Google says hi!!!');
    }
    reject('We can only talk with Google');
  });
}

function processRequest(res) {
  return new Promise((resolve, reject) => {
    console.log('Processing the response');
    resolve(`Here we go ${res}`);
  });
}

function requestPokemonData() {
  return fetch('https://pokeapi.co/api/v2/pokemon/ditto');
}

/******   Promises   ******/
function getRequest() {
  return makeRequest('google')
    .then((res) => processRequest(res))
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
// getRequest();

/******   Async await   ******/
async function makeAsyncRequest(request) {
  const makeRes = await makeRequest(request);
  console.log('Await makeRequest response:', makeRes);
  const processRes = await processRequest(makeRes);
  console.log('Await processRequest response:', processRes);
}

function getNumbers() {
  for (i = 0; i <= 100; i++) {
    console.log(i);
  }
}
// makeAsyncRequest('google');
// getNumbers();

/******   Fetch api   ******/
function getPromisePokemonData() {
  requestPokemonData()
    .then((res) => res.json())
    .then((res) => console.log('getPromisePokemonData', res))
    .catch((err) => console.log('getPromisePokemonData', err));
}
getPromisePokemonData();

async function getAwaitPokemonData() {
  try {
    const response = await requestPokemonData().then((res) => res.json());
    console.log('getAwaitPokemonData', response);
  } catch (err) {
    console.log('getAwaitPokemonData', err);
  }
}
getAwaitPokemonData();

getNumbers();
