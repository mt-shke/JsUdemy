'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2021-04-30T17:01:17.194Z',
    '2021-05-03T23:36:17.929Z',
    '2021-05-05T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const moveDate = function (date, locale) {
  const calcDays = (day1, day2) =>
    Math.floor(Math.abs(day2 - day1) / (1000 * 60 * 60 * 24));
  const daysPassed = calcDays(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const year = date.getFullYear();
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const dayz = `${date.getDate()}`.padStart(2, 0);

    // const hour = date.getHours();
    // const minute = `${date.getMinutes()}`.padStart(2, 0);
    // return `${dayz}/${month}/${year}, ${hour}h${minute}`;

    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (accounts, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort
    ? accounts.movements.slice().sort((a, b) => a - b)
    : accounts.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(accounts.movementsDates[i]);
    const displayDate = moveDate(date, accounts.locale);

    const formattedInter = new Intl.NumberFormat(accounts.locale, {
      style: 'currency',
      currency: accounts.currency,
    }).format(mov);

    const html = `<div class="movements__row">
  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
  <div class="movements__date">${displayDate}</div>
  <div class="movements__value">${formattedInter}</div>
</div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUserName(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
  // Clear input field
  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.blur();
  inputTransferTo.value = inputTransferAmount.value = '';
};

const logOutTimer = function () {
  const start = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Login to get started';
      containerApp.style.opacity = 0;
    }

    time--;
  };

  let time = 300;
  start();
  const timer = setInterval(start, 1000);
  return timer;
};

// ///// Fake login
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

//// Event Handler
let currentAccount, timer;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    //////  find
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //// Experiment internationalizing
    const now = new Date();
    const option = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      // weekday: 'long',
      month: 'numeric',
      year: 'numeric',
    };

    if (timer) clearInterval(timer);
    timer = logOutTimer();
    // const locale = navigator.language;

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      option
    ).format(now);

    // const now = new Date();
    // const year = now.getFullYear();
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const hour = now.getHours();
    // const minute = `${now.getMinutes()}`.padStart(2, 0);
    // const seconde = now.getSeconds();

    // labelDate.textContent = `${day}/${month}/${year} ${hour}h${minute}`;
  }

  updateUI(currentAccount);
});

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0).toFixed(2);

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(move => move < 0)
    .reduce((acc, val) => acc + val, 0);
  labelSumOut.textContent = formatCur(out, acc.locale, acc.currency);

  const interest = acc.movements
    .filter(move => move > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, val) => acc + val, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(+inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add Transfer Date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    updateUI(currentAccount);
  } else {
    console.log('Invalid Transfer');
  }
  clearInterval(timer);
  timer = logOutTimer();
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const loanAmount = +inputLoanAmount.value;

  if (
    loanAmount > 0 &&
    currentAccount.movements.some(mov => mov >= loanAmount * 0.1)
  ) {
    setTimeout(function () {
      currentAccount.movements.push(loanAmount);
      // Add Transfer Date
      currentAccount.movementsDates.push(new Date().toISOString());

      updateUI(currentAccount);
      inputLoanAmount.value = '';
    }, 2000);
  } else {
    setTimeout(function () {
      console.log('Ofc not go fkin work before comin here again!');
    }, 2000);
  }
  clearInterval(timer);
  timer = logOutTimer();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const movementsUSD = movements.map(move => move * eurToUsd);

////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////// FILTER Filter some

const deposit = movements.filter(function (move) {
  return move > 0;
});

// const withdrawal = movements.filter(function (move) {
//   return move < 0;
// });

const withdrawal = movements.filter(move => move < 0);

/////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////  REDUCE Snowball

// const balance = movements.reduce(function (acc, val, index, arr) {
//   return acc + val;
// }, 0);

// const balance1 = movements.reduce((arr, val) => arr + val, 1);

// // MAXimum value of

// const max = movements.reduce(
//   (arr, val) => (arr > val ? arr : val),
//   movements[0]
// );

// // FIND

// const firstWithdrawal = movements.find(move => move < 0);
// const findAccount = accounts.find(acc => acc.owner === 'Jessica Davis');

// console.log(movements);

// // EQUALITY  Includes
// console.log(movements.includes(-130));

// // CONDITION   Some
// console.log(movements.some(mov => mov > 1500));

// // EVERY
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// // Separate Callback better for DRY
// const deposits = move => move > 0;
// console.log(movements.some(deposits));
// console.log(movements.filter(deposits));
// console.log(movements.every(deposits));

// // FLAT
// const arre = [1, 2, 3, [4, 5, [6, 7], 8], 9, 10];
// console.log(arre.flat());
// console.log(arre.flat(2));
// // level

// const accMovements = accounts.map(acc => acc.movements);
// const allMovements = accMovements.flat();
// const bal = allMovements.reduce((acc, val) => acc + val, 0);
// console.log(allMovements);
// console.log(bal);

// const overBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((arr, val) => arr + val, 0);
// console.log(overBalance);

// // FLATMAP > 1 level
// const overBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((arr, val) => arr + val, 0);
// console.log(overBalance2);

// SORT
// const owners = ['Jean', 'Zach', 'Adam', 'Roberto'];
// console.log(owners);
// console.log(owners.sort());
// console.log(owners);

// console.log(movements);
// console.log(movements.sort());

// // Ascending order
// console.log(movements.sort((a, b) => (a > b ? 1 : -1)));
// console.log(movements.sort((a, b) => a - b));

// FILL
// const ar = [1, 2, 3, 4, 5, 6];
// console.log(new Array([1, 2, 3, 4, 5, 6]));

// // Empty Array
// const x = new Array(7);
// console.log(x);

// x.fill(1, 2, 5);
// console.log(x);

// ar.fill(43, 1, 3);
// console.log(ar);

// // Array.from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 10 }, (_, i) => i + 1);
// console.log(z);

// // Direct textContent => Array.from
// labelBalance.addEventListener('click', function (e) {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);
// });

////
let bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, val) => acc + val, 0);

let bankd = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, val) => (val > 0 ? (acc += val) : acc), 0);

const depositOneK = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 1000);

const depositOneKReduc = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      // return sums;
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

// const convertTitle = function (title) {
//   const expections = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(title =>
//       expections.includes(title)
//         ? title
//         : title[0].toUpperCase() + title.slice(1)
//     )
//     .join(' ');
//   return titleCase;
// };

// Conversion
// console.log(Number('10'));
// console.log(+('10'));

// Parsing
// console.log(Number.parseInt('32px', 10)); 10
// console.log(Number.parseInt('d32', 10)); NaN

// console.log(Number.parseInt(' 2.5 ')); 2
// console.log(Number.parseFloat('2.5')); 2.5

// console.log(parseFloat('2.5')); 2.5

// console.log(Number.isNaN('220'));

// console.log(Number.isFinite('220'));  Correct Method to check if is a number

// Rounding Numbers
// console.log(Math.trunc(23.3)); 23 => remove fractional
// console.log(Math.round(23.3)); 23 => nearest integer
// console.log(Math.ceil(23.3)); 24 up
// console.log(Math.floor(23.3)); 23 down

// Rounding Decimals
// console.log((2.7).toFixed(0)); 3
// console.log((2.7).toFixed(3));  2.700
// console.log((2.345).toFixed(2));  2.35
// console.log(+('2.345').toFixed(2));  2.35

// const isEven = n => n % 2 === 0;
// console.log(isEven(8)); true
// console.log(isEven(23)); false
// console.log(isEven(7)); false

/// Remainder operator
labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(309808529085932058902851304954645612155n);
// console.log(typeof 309808529085932058902851304954645612155n);
// console.log(BigInt(308593205n));

// const huge = 209316546851515648465156145641n;
// const multiplic = 12;
// console.log(huge * (BigInt(multiplic))); Correct

// console.log(20n > 19); true
// console.log(20n > 20); false
// console.log(20n > 200); false
// console.log(20n === 20); false
// console.log(typeof 20n); BigInt
// console.log(20n == 20); true

// console.log(huge + ' is biiig!!'); correct

// console.log(10n / 3n); 3n
// console.log(10 / 3); 3.3333...

//////////////// Dates

// const now = new Date();
// console.log(now);

// console.log(new Date('Wed May 05 2021 08:04:'));
// console.log(account1.movementsDates[0]);

// console.log(new Date(2073, 10, 15, 13, 45, 31));
// console.log(new Date(2023, 10, 32));

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// ///// Working with dates
// const future = new Date(2041, 9, 18, 22, 41, 12);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.getMilliseconds());
// console.log(future.toISOString());
// console.log(future.getTime());

// console.log(new Date(2265741672000));

// console.log(new Date(Date.now()));
// console.log(future.setFullYear(2962));
// console.log(future);

// const future = new Date(2073, 10, 15, 13, 45, 31);

// const calcDays = (day1, day2) => Math.abs(day2 - day1) / (1000 * 60 * 60 * 24);

// console.log(
//   calcDays(
//     new Date(2073, 10, 15, 13, 45, 31),
//     new Date(2073, 10, 5, 13, 45, 31)
//   )
// );

////////////////   Internationalizing Number

// const num = 5151335132.23;
// console.log(num);
// const options = {
//   style: 'currency',
//   // unit percent currency
//   unit: 'celsius',
//   currency: 'Eur',
//   // useGrouping: false,
// };

// console.log(new Intl.NumberFormat('en-us', options).format(num));
// console.log(new Intl.NumberFormat('en-gb', options).format(num));
// console.log(new Intl.NumberFormat('locale', options).format(num));
// console.log(new Intl.NumberFormat('de-DE', options).format(num));
// console.log(new Intl.NumberFormat('ar-SY', options).format(num));

//// SETTIME
// setTimeout(() => console.log('Here it is'), 1500);
// const arrayMenu = ['coca', 'potatoes'];
// const delivery = setTimeout(
//   (drink, plus) => console.log(`Here it is your ${drink} and your ${plus}`),
//   3000,
//   ...arrayMenu
// );
// if (arrayMenu.includes('potatoes')) clearTimeout(delivery);

// const timeupdate = setInterval(function () {
//   const now = new Date();
//   const hour = `${now.getHours()}`.padStart(2, 0);
//   const minute = `${now.getMinutes()}`.padStart(2, 0);
//   const seconde = `${now.getSeconds()}`.padStart(2, 0);
//   let timeDate = `${hour}h${minute}:${seconde}`;
//   console.log(`${hour}h${minute}:${seconde}`);
//   return (document.querySelector('.timer').textContent = timeDate);
// }, 1000);
