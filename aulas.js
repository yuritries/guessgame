'use strict';
//AULA 72 - Selecting and Manipulating Elements
console.log(`
AULA 72 - Selecting and Manipulating Elements`);

//IMPORTANT SELECTING and SHOWING the original text content
console.log(document.querySelector(".message").textContent);
//IMPORTANT EDITING the text content
document.querySelector(".message").textContent = "🎉 Correct Number!";
//IMPORTANT SELECTING and SHOWING the new text content
console.log(document.querySelector(".message").textContent);
//IMPORTANT EDITING and SHOWING the text content for other elements
document.querySelector(".number").textContent = 13;
console.log(document.querySelector(".number").textContent);
document.querySelector(".score").textContent = 10;
console.log(document.querySelector(".score").textContent);

//IMPORTANT EDITING a value from an element with class guess
document.querySelector(".guess").value = 23;
//IMPORTANT RETRIEVING a value from an element with class guess
console.log(document.querySelector(".guess").value);

//AULA 73 - Handling Click Events
console.log(`
AULA 73 - Handling Click Events`);
//IMPORTANT Event is something that happends on the page, like a mouse click, a key press, scrolling.... With an addEventListener, we can wait until the event happens and react to it
//IMPORTANT we need to select the element where the event should happen the addEventListener(method) is a special kind of function, because as second argument it expects an event handler function.If a function is a value, we can pass a function as an argument for another function and it will produce a value in its place
//The first argument is the type of event and the second is the event handler (what to do...reaction). The function will be a function expression with the difference that it's not assigned to any variable
//IMPORTANT We do not call the function(event handler) anywhere, we just define it inside the addEventListener function (method). The JS Engine thats calls the function (event handler) as soon as the event happens
document.querySelector(".check").addEventListener("click", function () {
  //console.log(document.querySelector(".guess").value);
  
  //adding a dom MANIPULATION inside the event handler
  //document.querySelector(".message").textContent = "🎉 Correct Number!";
  //storing the input value into a variable. IMPORTANT, the typeof the input is actually a string, not a value. Eventually, we'll need to compare this input to a randomly generated number by the program, so we need to convert the string
  
  //const guess = document.querySelector(".guess").value;
  //console.log(guess, typeof guess);
  
  //IMPORTANT, the typeof the input is actually a string, not a value.Eventually, we'll need to compare this input to a randomly generated number by the program, so we need to convert the string
  //const guess = Number(document.querySelector(".guess").value);
  //console.log(guess, typeof guess);
});

//AULA 74 - Implementing the game logic 
console.log(`
AULA 74 - Implementing the game logic`);
//we need to define the secret number outside the eventListener, othewise, the game would generate a new number at every user try.
//IMPORTANT - Math is an object that JS gives us and inside it has a lot of methods. random is one of them and gives a random number between 0 and 1
//const number = Math.random();

//If I want a number between 1 and 20, we FIRST have to multiply it by 20 
//const number = Math.random()*20;
//Ex: 0,99995 * 20 = 19.9999
//Ex: 0.0001 * 20 = 0.002
//but it still gives us numbers below 1. We then use Math.trunc, which cuts off the decimal part. 
//const number = Math.trunc(Math.random()*20);
//Ex: 0,99995 * 20 = 19.9999 = 19  
//Ex: 0.0001 * 20 = 0.002 = 0  

//and how we have a number that goes from 0 to 19. We then add 1 to this number
//const number = Math.trunc(Math.random()*20) + 1;
//Ex: 0,99995 * 20 = 19.9999 = 19 + 1 = 20
//Ex: 0.0001 * 20 = 0.002 = 0 + 1 = 1 

//WE THEN IMPLEMENT THE DIFFERENT SCENARIOS FOR THE GUESS WITH if/else statements inside the eventListener

//IMPORTANT We then implement the score reduction for the 2 last scenarios (guess > secretNumber) and (guess < secretNumber). We do that by crating a variable for the score and then updating that avaiable for each try and then display the updated variable


//AULA 75 - Manipulating CSS Styles 
console.log(`
AULA 75 - Manipulating CSS Styles`);

//let's change the background color whenever the plays guesses the secretNumber
document.querySelector("body").style.backgroundColor = "#60b347";
//We'll also make the secretNumber box wider
document.querySelector(".number").style.width = "30rem";
//IMPORTANT - for CSS we use style.property ... the multiple-word properties are written with camelcase and the value is ALWAYS passed as a string.
//IMPORTANT The CSS manipulation in JS is made as inline-CSS in HTML using the style attribute, so the properties in styles.CSS are not changed.


//AULA 76 - CHALLENGE - IMPLEMENT RESET FUNC 
console.log(`
AULA 76 - CHALLENGE - IMPLEMENT RESET FUNCTIONALITY`);

/*
1.implementar evento click no botão "again"  XXX
2.resetar pontuação  XXX
3.resetar numero secreto  XXX
3.resetar input  XXX
4.resetar mensagem direita XXX
5. resetar cor de fundo e largura do numero secreto  XXX 
*/