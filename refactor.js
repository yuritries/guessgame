"use strict";
//SECTION - VARIABLES
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//SECTION FUNCTIONS - REFACTOR STAGE
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
}
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
}
const showSecretNumber = function (secretNumber) {
  document.querySelector(".number").textContent = secretNumber;
}
const bodyBackgroundColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
}

//SECTION EVENT LISTENER
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //ARTICLE WHEN THERE IS NO input
  if (!guess) {
    displayMessage("🚫 Sem número!");

    //ARTICLE WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    displayMessage("🎉 Número Correto!");
    showSecretNumber(secretNumber);
    bodyBackgroundColor("#222");

    //ARTICLE - IMPLEMENTING HIGHSCORE FUNCTIONALITY
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //ARTICLE WHEN GUESS IS WRONG
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "⬆⬆⬆ Muito alto! ⬆⬆⬆" : "⬇⬇⬇ Muito baixo! ⬇⬇⬇");
      score--;
      displayScore(score);
    } else {
      displayMessage("☹ ☹ Você perdeu o jogo!");
      displayScore(0);
    }
  }
});

//SECTION RESETTING THE GAME
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Tente acertar...");
  displayScore(score);
  showSecretNumber("?");
  document.querySelector(".guess").value = "";
  bodyBackgroundColor("dodgerblue");
});