'use strict';

//selecting elements
const score = document.querySelectorAll('.score');
const reset = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const diceImage = document.querySelector('.dice');
const btnHold = document.querySelector('.btn--hold');

const player1 = document.querySelector('#current--0');
const player2 = document.querySelector('#current--1');

const p0 = document.querySelector('.player--0');
const p1 = document.querySelector('.player--1');

const players = document.querySelector('.current-score');

const active = document.querySelector('.player--active');

const s0 = document.querySelector('#score--0');
const s1 = document.querySelector('#score--1');

//making an array to score of player 0 and 1
let play, sum, score_save;

//initial
const initial = function () {
  diceImage.classList.add('hidden');
  s0.textContent = 0;
  s1.textContent = 0;
  play = true;
  sum = 0;
  score_save = [0, 0];
  p0.classList.remove('player--winner');
  p1.classList.remove('player--winner');
  p0.classList.add('player--active');
  p1.classList.remove('player--active');
};

//intiliazing the game
initial();

//generating a random dice roll
const diceArray = [
  'dice-1.png',
  'dice-2.png',
  'dice-3.png',
  'dice-4.png',
  'dice-5.png',
  'dice-6.png',
];

//switch player function
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;

  sum = 0;

  //adding the background focus from one plyaer and removing from other

  p0.classList.toggle('player--active');
  p1.classList.toggle('player--active');
}

sum = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function () {
  //

  if (play) {
    //adding the dice
    diceImage.classList.remove('hidden');

    //generating random number
    let randomIndex = Math.floor(Math.random() * diceArray.length);

    sum += randomIndex + 1;

    // Get the randomly selected image source
    const randomImageSrc = diceArray[randomIndex];

    // Set the new image source to the image element
    diceImage.src = randomImageSrc;

    if (randomIndex !== 0) {
      document.getElementById(`current--${activePlayer}`).textContent = sum;
    } else {
      switchPlayer();
    }
  }
});

//hold button event handler

btnHold.addEventListener('click', function () {
  //

  if (play) {
    //adding current score to active player
    score_save[activePlayer] += sum;

    //setting the score the active player
    document.getElementById(`score--${activePlayer}`).textContent =
      score_save[activePlayer];

    if (score_save[activePlayer] >= 100) {
      //
      //adding the background winning colour
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      play = false;
    }

    //switching player
    switchPlayer();
  }
});

//reset score
reset.addEventListener('click', function () {
  initial();
});
