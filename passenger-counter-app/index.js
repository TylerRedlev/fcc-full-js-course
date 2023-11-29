//define the count element
let countEl = document.getElementById("count-el");
console.log(countEl);

//initalize the count as 0
let count = 0;
console.log(count);

//Listen for clicks on the increment button
function increment() {
  console.log("The button was clicked");

  //increment the count variable when the button is clicked
  count = count + 1;

  //change the count-el in the HTML to reflect the new count
  countEl.innerText = count;
}
