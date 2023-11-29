let countEl = document.getElementById("count-el"); //define the count element
let saveEl = document.getElementById("save-el");
console.log(countEl);

//initalize the count as 0
let count = 0;
console.log(count);

//Listen for clicks on the increment button
function increment() {
  console.log("The button was clicked"); //increment the count variable when the button is clicked
  count += 1; //change the count-el in the HTML to reflect the new count
  countEl.textContent = count;
}

//create a function that saves the count
function save() {
  console.log(count + " saved");

  let countStr = count + " - ";
  //Create a variable that contains both the count and the dash operator e.x. "12 -"

  saveEl.textContent += countStr; //Render the variable in the saveEl using inner text
  //NB? Make sure not to delete the existing content of the paragraph

  count = 0;
  countEl.textContent = "0";
}
