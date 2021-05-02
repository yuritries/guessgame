'use strict';
/*
//AULA 72 - Selecting and Manipulating Elements
console.log(`
AULA 72 - Selecting and Manipulating Elements`);

//IMPORTANT SELECTING and SHOWING the original text content
console.log(document.querySelector(".message").textContent);
//IMPORTANT MANIPULATING the text content
document.querySelector(".message").textContent = "🎉 Correct Number!";
//IMPORTANT SELECTING and SHOWING the new text content
console.log(document.querySelector(".message").textContent);
//IMPORTANT MANIPULATING and SHOWING the text content for other elements
document.querySelector(".number").textContent = 13;
console.log(document.querySelector(".number").textContent);
document.querySelector(".score").textContent = 10;
console.log(document.querySelector(".score").textContent);

//IMPORTANT MANIPULATING a value from an element with class guess
document.querySelector(".guess").value = 23;
//IMPORTANT RETRIEVING a value from an element with class guess
console.log(document.querySelector(".guess").value);

//AULA 73 - Handling Click Events
console.log(`
AULA 73 - Handling Click Events`);
//IMPORTANT Event is something that happends on the page, like a mouse click, a key press, scrolling.... With an addEventListener, we can wait until the event happens and react to it
//IMPORTANT we need to select the element where the event should happen
the addEventListener (method) is a special kind of function, because as second argument it expects an event handler function. If a function is a value, we can pass a function as an argument for another function and it will produce a value in its place
//The first argument is the type of event and the second is the event handler (what to do...reaction). The function will be a function expression with the difference that it's not assigned to any variable
*/
//IMPORTANT We do not call the function(event handler) anywhere, we just define it inside the addEventListener function (method). The JS Engine thats calls the function (event handler) as soon as the event happens

//IMPORTANT - SETTING THE SECRET NUMBER --- Math s an object that JS gives us and inside it has a lot of methods. random is one of them and gives a random number between 0 and 1
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

//IMPORTANT We then implement the score reduction for the 2 last scenarios (guess > secretNumber) and (guess < secretNumber). We do that by crating a variable for the score and then updating that avriable for each try and then display the updated variable as the textContent for the .score element
let score = 20; //state variable. Beacuse it is part of the application state which is all the data that is relevant to the application. The secretNumber is application state. We want all this important data to be always avaiable in the code and not just in the DOM.

//IMPORTANT Now we want the game to end once you reach the score of 0. We'll set another if statement

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //if there's no input (no guess), it logs 0 - number, which is a falsy value. guess will be false and !guess gives as a true
  console.log(guess, typeof guess);
  //SECTION WHEN THERE IS NO input
  if (!guess) {
    document.querySelector(".message").textContent = "🚫 Sem número!";
  
  //SECTION WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Número Correto!";

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

  //SECTION WHEN GUESS IS TOO HIGH
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "⬆⬆⬆ Muito alto! ⬆⬆⬆";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "☹ ☹ Você perdeu o jogo!";
      document.querySelector(".score").textContent = 0;
    }
  //SECTION WHEN GUESS IS TOO LOW
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "⬇⬇⬇ Muito baixo! ⬇⬇⬇";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "☹ ☹ Você perdeu o jogo!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//SECTION Coding Challenge - Functionality of the "AGAIN" button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  
  document.querySelector(".message").textContent = "Tente acertar...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  
  
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  console.log(secretNumber);
});