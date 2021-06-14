'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const starterMenu = ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'];

const [Pizza, , Risotto, ...rest] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

// for (const [ind, val] of restaurant.starterMenu.entries())
//   console.log(ind, val);

// for (const key in restaurant) console.log(key);

// for (const prop of Object.keys(restaurant)) console.log(prop);

const sMenu = Object.keys(starterMenu);
const vMenu = Object.values(starterMenu);
const OpHours = Object.entries(restaurant.openingHours);
console.log(OpHours);

let menu = `Here, we have ${vMenu.length} delicous menus, and there are our nice menus: `;
for (const ep of vMenu) {
  menu += ` ${ep}, `;
}
for (const main of restaurant.mainMenu) {
  menu += `${main}, `;
}

console.log(menu);

for (const [hou, { open, close }] of OpHours) {
  console.log(`Here we open ${hou}, at ${open} to ${close}`);
}

console.log('');
console.log('');

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const scorer = game.scored;
// console.log(scorer);

// for (const [i, el] of scorer.entries()) {
//   console.log(`Goal ${i + 1}: ${el}`);
// }

// const odds = Object.values(game.odds);

// let average = 0;

// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// console.log(`Odd of victory ${game.team1}: ${odds[0]}`);
// console.log(`Odd of draw: ${odds[1]}`);
// console.log(`Odd of victory ${game.team2}: ${odds[2]}`);

const sett = new Set(restaurant.starterMenu);

console.log(sett);

const menuSt = [...sett];

console.log(menuSt);
console.log(sett.size);

const carto = new Map();

carto
  .set(1, 'This is a map')
  .set(4, `Ok let's do it the hard way`)
  .set(true, 'cmon')
  .set(15, true);

console.log(carto);

const answer = true;
answer == carto.get(15) ? console.log('yea') : console.log('nope');

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// console.log(gameEvents);
// const events = gameEvents.values();
// console.log(events);
// events.includes('Yellow Card') ?? console.log(events.indexOf('Yellow Card'));

// events.splice();

// for (const [key, el] of gameEvents) {
//   if (key < 45) {
//     console.log(`[FIRST HALF] ${key}: ${el}`);
//   }
//   if (key > 45) {
//     console.log(`[SECOND HALF] ${key}: ${el}`);
//   }
// }

// const surNamel = 'zfojzfdFGH';
// console.log(surNamel);
// const nomTlc = surNamel.toLowerCase();
// console.log(nomTlc);
// const correctame = nomTlc[0].toUpperCase() + nomTlc.slice(1).toLowerCase();
// const anotherfin = ' ';

// console.log(correctame, anotherfin);

// const announce =
//   'Hello, this is a new string for you to train on, and train on again TRAIN train trAiN';
// console.log(announce.replace('train', 'suffer'));
// console.log(announce.replaceAll('train', 'suffer'));
// console.log(announce.replaceAll(/train/g, 'suffer'));

// const cardNum = '516512213531655565595';
// const cardNum1 = '516512213531';
// const cardNum2 = '5165122135314849498484848949';
// const cardNum3 = '513531';

// const hideCard = function (param) {
//   const str = param + '';
//   const lastFour = str.slice(-4);
//   return lastFour.padStart(str.length, '#');
// };

// console.log(hideCard(cardNum));
// console.log(hideCard(cardNum1));
// console.log(hideCard(cardNum2));
// console.log(hideCard(cardNum3));

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// THIS TEST DATA (pasted to textarea)
// underscore_case;
// first_name;
// Some_Variable;
// calculate_AGE;
// delayed_departure;

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// Afterwards, test with your own test data!

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

console.log(document.querySelector('textarea').value);
let inputVal = String(document.querySelector('textarea').value);

document.querySelector('button').addEventListener('click', function () {
  console.log('clic');
  match();
});

console.log(inputVal);

const match = function () {
  let inputVal = document.querySelector('textarea').value.replace('_', ' ');
  console.log(inputVal);
  const tlc = inputVal.toLowerCase();
  const iCap = tlc.indexOf(' ');
  console.log(iCap);
  const capi = (tlc.length[iCap] + 1).toUpperCase();
  const join = capi.join('');
  console.log(join);
};
