'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const body = document.querySelector('body');

// ///////////////////////////////////////
// const renderCountry = function (data, className = '') {
//   const html = `
//   <article class="country ${className}">
//   <img class="country__img" src=${data.flag} />
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)}</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//   </div>
// </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const renderNeighbour = function (neighbour) {
//   if (!neighbour) return;
//   console.log(neighbour);

//   neighbour.forEach(nei => {
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${nei}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// // Ajax call country 1
// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     // Render country 1
//     renderCountry(data);

//     // Neighbour country
//     const neighbour = data.borders;
//     renderNeighbour(neighbour);
//   });
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
// };

// getCountryData('france');

// getCountryAndNeighbour('usa');

// const req = fetch(`https://restcountries.eu/rest/v2/name/france`);
// console.log(req);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// getCountryData('nepal');

// const getJSON = function (url, errorMsg = 'It broked!') {
//   return fetch(url).then(response => {
//     if (!response) throw new Error(errorMsg, response.status);
//     return response.json();
//   });
// };

// const getCountryData = country =>
//   // country
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok) throw new Error(`Error : ${response.status}`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
//       const neighbour = 'zDfg';
//       if (!neighbour) return;
//       console.log(neighbour);
//       // neighbour country
//       return fetch(`https://restcountries.eu/rest/v2/name/${neighbour}`);
//     })
//     .then(response => {
//       if (!response) throw new Error(`Error : ${response.status}`);
//       return response.json().then(data => renderCountry(data[0], 'neighbour'));
//     })
//     .catch(err => {
//       console.error(`** ${err}: ${err.message} **`);
//       renderError(`${err.message}`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));

// const getCountryData = country =>
//   // country
//   getJSON(
//     `https://restcountries.eu/rest/v2/name/${country}`,
//     `Cannot find country! ${Error}`
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       console.log(data[0]);
//       const neighbour = data[0].borders[0];
//       // const neighbour = 'zDfg';
//       if (!neighbour) throw new Error('This country has no neighbour');
//       return getJSON(`https://restcountries.eu/rest/v2/name/${neighbour}`);
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`err: ${err}`);
//       console.error(`err.message: ${err.message}`);
//       console.error(`err.status: ${err.status}`);
//       renderError(`${err.message}, ${err.status}`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));

// btn.addEventListener('click', function () {
//   // getCountryData('switzand');
//   whereAmI();
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀*/

// const whereAmI = function (lat, lng) {
//   let country;
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => {
//       if (!response.ok) throw new Error(response.status);
//       return response.json();
//     })
//     .then(
//       data => (
//         (country = data.suggestion.altname),
//         console.log(
//           data,
//           `You are in ${data.suggestion.north.city}, ${data.suggestion.altname}`
//         )
//       )
//     )
//     .then(() => getCountryData(`${country}`))
//     .catch(err => console.log(err.message));
// };

// // whereAmI(2.508, 13.381);
// whereAmI(9.037, 72.873);
// whereAmI(33.933, 18.474);

/////////////////////////////////////
// Study - Call Stack - Micro task queue - Call back queue

// console.log('Test Start');
// setTimeout(() => {
//   console.log('0 sec test');
// }, 0);

// Promise.resolve('Promise 1').then(pro => console.log(pro));
// Promise.resolve('Promise 2').then(pro => {
//   for (let i = 0; i < 100000000; i++) {}
//   console.log(pro);
// });
// Promise.resolve('Promise 3').then(pro => console.log(pro));
// console.log('Test End');

// ////////////////////////////////
// // Promise

// const sendLetter = new Promise(function (resolved, rejected) {
//   console.log(`Hello, your letter should arrive in 1 sec`);

//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolved(`You received a letter`);
//     } else {
//       rejected(
//         new Error(
//           `Your letter is coming soon, or maybe we lost it and you will not receive it, sorry bye`
//         )
//       );
//     }
//   }, 1000);
// });

// sendLetter.then(res => console.log(res)).catch(err => console.log(err));

// // Promisifying setTimeout
// const wait = time => new Promise(resolve => setTimeout(resolve, time * 1000));

// wait(2)
//   .then(() => {
//     console.log('Waited 2 sec');
//     return wait(1);
//   })
//   .then(() => console.log('1sec again'));

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// wait(1)
//   .then(() => {
//     console.log('1sec passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2sec passed');
//     return wait(1);
//   })
//   .then(() => console.log('3sec passed'));

// Promise.resolve('Promise Resolved!!').then(pro => console.log(pro));
// Promise.reject(new Error('Promise Rejected!!!')).catch(err => console.log(err));

// const whereAmI = function () {
//   let country;
//   let lat, lng;
//   getPosition()
//     .then(pos =>
//       fetch(
//         `https://geocode.xyz/${pos.coords.latitude},${pos.coords.longitude}?geoit=json`
//       )
//     )
//     .then(response => {
//       if (!response.ok) throw new Error(response.status);
//       return response.json();
//     })
//     .then(
//       data => (
//         (country = data.country),
//         console.log(data, `You are in ${data.city}, ${data.country}`)
//       )
//     )
//     .then(() => getCountryData(`${country}`))
//     .catch(err => console.log(err.message));
// };

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// whereAmI();

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀 */
// const imgContainer = document.querySelector('.images');

// const wait = time =>
//   new Promise(resolve =>
//     setTimeout(() => {
//       resolve(console.log(`${time} secs 've passed`));
//     }, time * 1000)
//   );

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     let img = document.createElement('img');
//     img.src = imgPath;
//     img.addEventListener('load', function () {
//       imgContainer.append(img);

//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Loading complete');
//     return wait(1);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Loading complete');
//     return wait(1);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-3.jpg');
//   })
//   .catch(err => console.log(err));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve);
//   });
// };

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src=${data.flag} />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const renderNeighbour = function (neighbour) {
//   if (!neighbour) return;
//   console.log(neighbour);

//   neighbour.forEach(nei => {
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${nei}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

const renderNeighbour = async function (neighbour) {
  try {
    if (!neighbour) return console.log('No neighbour');
    console.log(neighbour);
    const response = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${neighbour}`
    );
    const data = await response.json();
    return renderCountry(data, 'neighbour');
  } catch (err) {
    console.log(err.message);
  }
};

const getCountryData = function (data) {
  console.log(data);
  fetch(`https://restcountries.eu/rest/v2/name/${data.country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    });
};

// const whereAmI = function () {
//   let country;
//   let lat, lng;
//   getPosition()
//     .then(pos =>
//       fetch(
//         `https://geocode.xyz/${pos.coords.latitude},${pos.coords.longitude}?geoit=json`
//       )
//     )
//     .then(response => {
//       if (!response.ok) throw new Error(response.status);
//       return response.json();
//     })
//     .then(
//       data => (
//         (country = data.country),
//         console.log(data, `You are in ${data.city}, ${data.country}`)
//       )
//     )
//     .then(() => getCountryData(`${country}`))
//     .catch(err => console.log(err.message));
// };

const whereAmI = async function () {
  try {
    // Get nav position
    const position = await getPosition();
    const { latitude: lat, longitude: lng } = position.coords;

    // Get country position
    const responseGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json`
    );
    if (!responseGeo.ok)
      throw new Error(console.log('Problem with response Geo'));
    const dataGeo = await responseGeo.json();

    // Get Country data
    const responseCountry = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );
    if (!responseCountry.ok)
      throw new Error(console.log('Problem with response Country'));

    const dataCountry = await responseCountry.json();

    // Render Country
    renderCountry(dataCountry[0]);
    renderNeighbour(dataCountry[0].borders[0]);
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.log(`This is an error ${err}`);
    throw err;
  }
};

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

btn.addEventListener('click', function () {
  whereAmI();
});

const getPosition = async function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// console.log('One: Start!');
// whereAmI()
//   .then(val => console.log(`Two : ${val}`))
//   .catch(err => console.log(`Two : ${err}`))
//   .finally(() => console.log(`Three : function ended`));

// (async function () {
//   try {
//     const val = await whereAmI();
//     console.log(`Two : ${val}`);
//   } catch (err) {
//     console.error(`Two : ${err.message}`);
//   }
//   console.log(`Three : function ended`);
// })();

const getCapital = async function (c) {
  try {
    const resp = await fetch(`https://restcountries.eu/rest/v2/name/${c}`);
    const data = await resp.json();
    const { capital: cap } = data[0];
    return cap;
  } catch (err) {
    console.log(err.message);
  }
};

const get3Capitals = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getCapital(c1),
      getCapital(c2),
      getCapital(c3),
    ]);
    console.log(data);
  } catch (err) {
    console.error(err.message);
  }
};

const getCountry = async function (country) {
  const resp = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
  const data = await resp.json();
  // console.log(data[0]);
  return data[0];
};

const get3Countries = async function (a, z, e) {
  try {
  } catch (err) {
    console.log(err.message);
  }
};

// const get2C = async function (a, b, c, d, e) {
//   try {
//     await Promise.all([
//       getCountry(a),
//       getCountry(b),
//       getCountry(c),
//       getCountry(d),
//       getCountry(e),
//     ]);
//   } catch (err) {
//     console.error(err.message);
//   }
// };

// get2C('france', 'usa', 'norway', 'sweden', 'denmark');

//////////////////////////////////////////////////////////////////////////
// Promise.race
// (async function () {
//   const res = await Promise.race([
//     getCountry('france'),
//     getCountry('usa'),
//     getCountry('netherlands'),
//   ]);
//   console.log(res);
// })();

// const timer = function (time) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Too long'));
//     }, time * 1000);
//   });
// };

// Promise.race([getCountry('Togo'), timer(0.3)])
//   .then(res => console.log(res))
//   .catch(err => console.log(err.message));

//////////////////////////////////////////////////////////////////////////
// Promise.allSettled

// Promise.allSettled([
//   Promise.resolve('Ok'),
//   Promise.reject('Not ok'),
//   Promise.resolve('Ok Too'),
//   Promise.reject('No no not ok'),
// ]).then(res => console.log(res));

// Promise.all([
//   Promise.resolve('Ok'),
//   Promise.reject('Not ok'),
//   Promise.resolve('Ok Too'),
//   Promise.reject('No no not ok'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

//////////////////////////////////////////////////////////////////////////
// Promise.any

// Promise.any([
//   Promise.resolve('Ok g'),
//   Promise.reject('Not ok'),
//   Promise.resolve('Ok Too'),
//   Promise.reject('No no not ok'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/
const imgContainer = document.querySelector('.images');
let currentImg;

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

// const loadNPause = async function () {
//   try {
//     let img = await createImage('img/img-1.jpg');
//     console.log(img);
//     await wait(2);
//     img.style.display = 'none';
//     img = await createImage('img/img-2.jpg');
//     await wait(2);
//     img.style.display = 'none';
//     img = await createImage('img/img-3.jpg');

//     // currentImg.style.display = 'none';
//   } catch (err) {
//     console.log(err, err.message);
//   }
// };

// loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);

    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.log(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

/*
createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));
  */

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve);
//   });
// };
