let firstName = "Durukan";

let lastName = "Kizilarslan";

let fullName = firstName + " " + lastName;

console.log(fullName);

//Function to greet with output
let name1 = "Linda";
let greeting = "Hi there";

function hiGreet() {
  let greetingFull = greeting + ", " + name1 + "!";
  console.log(greetingFull);
}

hiGreet();

//-----------------------------

let myPoints = 3;

function add3Points() {
  myPoints += 3;
}

function remove1Point() {
  myPoints -= 1;
}

add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();
console.log(myPoints);

for (let i = 10; i < 101; i += 10) {
  console.log(i);
}
