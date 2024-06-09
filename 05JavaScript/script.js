'use strict';

/* 
Well, DOM stands for Document Object Model, and it is, basically, a structured representation of HTML documents. Now, the DOM is automatically created by the browser as soon as the HTML page loads.

In this tree, each HTML element is one object.

A Dom tree actually has more than just element nodes. It also has nodes for all the text itself, comments and other stuff,

many people believe that the DOM and all the methods and properties that we can use to manipulate the DOM, such as documented or the query selector and lots of other stuff are actually part of JavaScript.

Remember that JavaScript is actually just a dialect of the ECMAScript specification, and all this DOM related stuff is simply not in there.

Well, the DOM and DOM methods are actually part of something called the web APIs. So the web API APIs are like libraries that browsers implement
and that we can access from our JavaScript code.

A web APIs are, basically, libraries that are also written in JavaScript and that are automatically available for us to use.

There is actually an official DOM specification that browsers implement, which is the reason why DOM manipulation works the same in all browsers.

Now, besides the DOM, there are actually a ton more web APIs, such as timers, the fetch API, and many more.
*/
// console.log(document.querySelector('.message'));
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'manish';

// console.log(document.querySelector('.guess').value);

// document.querySelector('.guess').value = 34;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(guess, typeof guess);
  const guessNumber = Number(guess);
  console.log(guessNumber, typeof guessNumber);

  if (!guess) {
    document.querySelector('.message').textContent = '🛑 No Number';
  } else if (guessNumber === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessNumber !== secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent =
        score > secretNumber ? '📈 Too High' : '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
