'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
  <div class="movements__value">${mov}€</div>
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
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
  // Clear input field
  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.blur();
  inputTransferTo.value = inputTransferAmount.value = '';
};

//// Event Handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    //////  find
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //   ---------  ?.
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
  }

  updateUI(currentAccount);
});

const calcDisplayBalance = function (acc) {
  console.log(acc);
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} €`;

  const out = acc.movements
    .filter(move => move < 0)
    .reduce((acc, val) => acc + val, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(move => move > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, val) => acc + val, 0);
  labelSumInterest.textContent = `${interest}€`;
};

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
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
    console.log(amount, receiverAcc.movements, currentAccount.movements);
    updateUI(currentAccount);
  } else {
    console.log('Invalid Transfer');
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const loanAmount = Number(inputLoanAmount.value);

  if (
    loanAmount > 0 &&
    currentAccount.movements.some(mov => mov >= loanAmount * 0.1)
  ) {
    console.log(loanAmount, loanAmount * 0.1);
    currentAccount.movements.push(loanAmount);
  }
  updateUI(currentAccount);
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
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
  displayMovements(currentAccount.movements, !sorted);
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

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

const recFood = function (dogs) {
  dogs.forEach(function (dogs) {
    dogs.recFood = Math.trunc(dogs.weight ** 0.75 * 28);
  });
};
recFood(dogs);

console.log(dogs);

const sarahDog = dogs.find(dogs => dogs.owners[0] === 'Sarah');

console.log(sarahDog);

let eTooMuch = [];
let eTooLittle = [];

eTooMuch = dogs
  .filter(dogs => dogs.curFood > dogs.recFood * 1.1)
  .flatMap(dogs => dogs.owners);

eTooLittle = dogs
  .filter(dogs => dogs.curFood < dogs.recFood * 0.9)
  .flatMap(dogs => dogs.owners);

console.log(eTooMuch);
console.log(eTooLittle);

const eToo = eTooMuch.join(' and ');
console.log(`${eToo}'s dogs eat too much! `);

const little = eTooLittle.join(' and ');
console.log(`${little}'s dogs eat too little!`);

const eatingOk = [];

dogs.forEach(function (dogs) {
  console.log(dogs);
  if (dogs.curFood < dogs.recFood * 1.1 && dogs.curFood > dogs.recFood * 0.9) {
    console.log(`The dog of ${dogs.owners} eats the good amount of food!`);
    eatingOk.push(dogs);
  }
});

console.log(eatingOk);

const sorte = dogs.sort(dogs => dogs.recFood.sort((a, b) => a - b));
