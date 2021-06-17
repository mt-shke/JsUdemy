'strict mode';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
// spendingLimits.jay = 200;
// console.log(spendingLimits);

const getLimits = (limits, user) => limits?.[user] ?? 0;

// PURE Function !
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  cleanUser = user.toLowerCase();
  return value <= getLimits(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

const checkExpenses = (state, limits) =>
  state.map(entry =>
    entry.value <= -getLimits(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );

// const checkExpenses = function (state, limits) {
//   return state.map(entry => {
//     return entry.value <= -getLimits(limits, entry.user)
//       ? { ...entry, flag: 'limit' }
//       : entry;
//   });
// };

const finalBudget = checkExpenses(newBudget2, spendingLimits);
console.log(finalBudget);

const logBigExpenses = function (state, bigLimit) {
  return console.log(
    state
      .filter(entry => entry.value <= -bigLimit)
      .map(entry => `${entry.description.slice(-2)}`)
      .join(' / ')
  );

  // return console.log();
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';
};

logBigExpenses(finalBudget, 500);
