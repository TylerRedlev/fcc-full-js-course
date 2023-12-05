console.log("Blackjack");

let firstCard = 9;
let secondCard = 9;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
  renderGame();
}

function renderGame() {
  sumEl.textContent += " " + sum;
  cardsEl.textContent += " " + cards[0] + " - " + cards[1];
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
  console.log(isAlive);
}

function newCard() {
  //1. Create a card variable, and hard code its value to a number (2-11)
  let card = 8;
  console.log(card + "added");
  //Add the new card to the sum variable
  sum += card;

  //Call start game function
  renderGame();
}
