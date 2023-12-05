let player1Time = 102;
let player2Time = 107;

//Write a function that returns the total race time
function getTotalTime() {
  return player1Time + player2Time;
}

let totalTime = getTotalTime();
console.log(totalTime);

function getRandomNumber() {
  return Math.random();
}

let randomNumber = getRandomNumber();
let flooredNumber = Math.floor(randomNumber * 6);

console.log(randomNumber * 6);
console.log(flooredNumber);
