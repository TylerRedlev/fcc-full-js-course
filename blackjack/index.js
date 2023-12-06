console.log("Blackjack");

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;

  let firstCard = getRandomNumber();
  let secondCard = getRandomNumber();
  cards = [firstCard, secondCard];

  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";

  //Render cards in the current state
  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i];

    // Check if the current element is the last one in the array
    if (i === cards.length - 1) {
      console.log("This is the last element.");
    } else {
      cardsEl.textContent += " - ";
    }
  }

  sumEl.textContent += " " + sum;
  //cardsEl.textContent += " " + cards[0] + " - " + cards[1];
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
  //Give new card only if isAlive and not blackjack
  if (isAlive === true && hasBlackJack === false) {
    //1. Create a card variable, and hard code its value to a number (2-11)
    let card = getRandomNumber();
    console.log(card + "added");
    //Add the new card to the sum variable
    sum += card;
    cards.push(card);
    console.log(cards);
    //Call start game function
    renderGame();
  }
}
