function saveLead() {
  console.log("Lead saved!");
}
let leads = [];
const btnSave = document.getElementById("btn-input");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("list-el");

let myLeads = `["asdfasdfadsfa"]`;

//Turn leads string into an array
//Push a new value to the array
//Turn the array into a string again
//Console log the string using typeofto verify that it's a string
let parsedLeads = JSON.parse(myLeads);
parsedLeads.push("asdfa");
console.log(parsedLeads);

console.log(typeof parsedLeads);
parsedLeads = JSON.stringify(parsedLeads);
console.log(parsedLeads);

// localStorage.setItem("myLeads example", "www.examplelead.com");
// console.log(localStorage.getItem("myLeads example"));
// localStorage.clear();

btnSave.addEventListener("click", function () {
  leads.push(inputEl.value);
  inputEl.value = "";

  renderLeads();
});

function renderLeads() {
  ulEl.innerHTML = "";
  let listItems = "";

  for (i = 0; i < leads.length; i++) {
    //listItems += "<li><a target='_blank' href='#'>" + leads[i] + "</a></li>";
    listItems += `<li><a target='_blank' href='#'> ${leads[i]} </a></li>`;
    //Create listItems for list items HTML

    //create li const
    //add element of leads to the list item
    //add to ul through append
    // const li = document.createElement("li");
    // li.textContent = leads[i];
    // listItems.textContent += li;
  }

  ulEl.innerHTML = listItems;
}
