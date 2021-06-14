'use strict';

////////////////////////////////////// FLIGHT PRACTICE
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('L23', 1, 34);
// createBooking('DLK', 3, 345);
// createBooking('DLK', undefined, 345);

// const flight = 'LFJF';
// const person = {
//   name: 'Kean Payl',
//   passport: 65951156,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'L2651F';
//   passenger.name = 'Mr ' + passenger.name;

//   if (passenger.passport === 65951156) {
//     alert('checked in');
//   } else alert('wrong passport');
// };

// checkIn(flight, person);
// console.log(flight);
// console.log(person);

/////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////// FUNCTIONS

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // HIGH-order function
// const transformer = function (str, fn) {
//   console.log(`Original str: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by : ${fn.name}`);
// };

// transformer('Javascript is best', upperFirstWord);
// transformer('Javascript is best', oneWord);

// const sayFive = function () {
//   console.log('FIVE');
// };

// document.body.addEventListener('click', sayFive);

// /////////////////////////////////////////////////////////

// const greet = function (greetings) {
//   return function (params) {
//     console.log(`${greetings} ${params}`);
//   };
// };
// const salud = greet('Hello');
// console.log(salud('Roberto'));

// const greet2 = greetings => name => console.log(`${greetings} ${name}`);
// console.log(greet2('hi')('Pol'));

/////////////////
// ////////////////////////////////////////////////// CALL & APPLY METHOD
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],

//   book(flightNum, name) {
//     console.log(
//       `${name} is using ${this.airline}, airline code ${this.iataCode}, and travelling by flight ${flightNum}`
//     );

//     this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
//   },
// };

// lufthansa.book('K029', 'Jean Pierre');
// lufthansa.book('MDP242', 'Marcel Patoulachi');

// const newWings = {
//   airline: 'NewWings',
//   iataCode: 'NW',
//   bookings: [],
// };

// const book = lufthansa.book;
// book.call(newWings, 23, `Jean De la pIerre`);

// const bookExample = {
//   airline: 'Sample',
//   iataCode: 'EX',
//   bookings: [],
// };
// book.call(bookExample, 234, 'ExampleName');

// const dataPassenger = ['K3424', 'Rene Jean Louis'];
// const dataPassengerCall = ['F151', 'Rene Jumeau NewGoodMethod'];
// book.apply(bookExample, dataPassenger);
// book.call(bookExample, ...dataPassengerCall);

// console.log(bookExample);
// /////////////////////////// BIND , partial application

// const bookNW = book.bind(newWings);
// bookNW('FK22L', 'Joseph Jose Maria');

// // book(flightNum, name)
// const bookNW52 = book.bind(newWings, 52);
// bookNW52('Jean Joseph');
// bookNW52('Francesca Alonzo');

// //                                            EVENT Listener

// newWings.planes = 250;
// newWings.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', newWings.buyPlane.bind(newWings));

// //// Taxes

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));
// console.log(addVAT(23));

// const taxAdd = rate => value => value + value * rate;

// const vatAdd = taxAdd(0.23);
// console.log(vatAdd(100));
// console.log(vatAdd(23));

///////////////////////////////////////////////////////////////

// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?

// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]
// Hints: Use many of the tools you learned about in this and the last section �
// GOOD LUCK �

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     document.querySelector('.poll').addEventListener('click', pollPrompt);

//     let [a, b, c, d] = poll.answers;
//     console.log(a, b, c, d);

//     let pollPrompt = function () {
//       const promp = window.prompt(
//         `What is your favourite programming language? \n 0: JavaScript \n 1: Python \n 2: Rust\n 3: C++`
//       );
//       const result = promp;
//       if (result == '1') a += 1;
//       if (result == '2') b += 1;
//       if (result == '3') c += 1;
//       if (result == '4') d += 1;
//       console.log(a, b, c, d);
//       console.log(typeof result, result);
//     };
//   },
// };
// document.querySelector('.poll').addEventListener('click', pollPrompt);

// console.log(poll.answers);
// console.log(a, b, c, d);

//////////////////////////////////// IIFE Imediately Invoked Function Expressions

// (function () {
//   console.log(`This is it`);
// })();

// (() => console.log('this is it!'))();

// ////////////////////////////////////////////////////  CLOSURES

// const stadiumBooking = function () {
//   let spectatorCount = 0;

//   return function () {
//     spectatorCount++;
//     console.log(`${spectatorCount} spectators`);
//   };
// };

// const booker = stadiumBooking();

// booker();
// booker();
// booker();

// // console.dir(booker);
// let o = 23;
// let z;

// const a = function () {
//   const a = 13;
//   z = function () {
//     console.log(a * 2);
//   };
//   z();
// };

// a();

// const b = function () {
//   const b = 21;
//   o = function () {
//     console.log(b * 3);
//   };
// };

// b();

// ////// EX 2

// const stadVisitor = function (n, wait) {
//   const perGrp = n / 3;

//   setTimeout(function () {
//     console.log(`Let all the ${n} visitors come in!`);
//     console.log(`Each 3 groups contain ${perGrp} visitors`);
//   }, wait * 1000);

//   console.log(`Ready in ${wait} seconds!`);
// };

// stadVisitor(240, 3);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
