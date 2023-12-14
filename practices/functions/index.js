const welcommeEl = document.getElementById("welcome-el");

function greetUser(greeting, userName) {
  welcommeEl.textContent = `${greeting},  ${userName}`;
}

greetUser("Naber lan", "yarram");

function add(a, b) {
  return a + b;
}

console.log(add(9, 102));

function getFirst(arr) {
  return arr[0];
}

let testArray = [1, 2, 3];

console.log(getFirst(testArray));
