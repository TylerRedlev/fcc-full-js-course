console.log("Blackjack");

let firstCard = 9;
let secondCard = 9;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
  sumEl.textContent += " " + sum;
  cardsEl.textContent += " " + firstCard + " - " + secondCard;
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
