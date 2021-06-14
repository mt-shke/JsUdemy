'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!!!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Wrong
  if (!guess) {
    document.querySelector('.message').textContent =
      'Only number between 1 - 20!';

    // WIN
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!!!';
    document.querySelector('body').style.backgroundColor = '#47cb30';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // High
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost!';
    }

    // Low
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too low ^';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost!';
    }
  }
});

// element 'again'  click event

// handler restore initial values

// restore inital condition of messages

// restore background
let highscore = 0;

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';

  if (highscore < score) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').textContent = '';
  score = 20;

  //   const slider = node.querySelector(".custom-range");
  //   slider.value = slider.defaultValue;
});
