function saveLead() {
  console.log("Lead saved!");
}

//Declaring const and variables
let leads = [];

//Declaring page elements
const btnSave = document.getElementById("btn-input");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("list-el");
const btnDelete = document.getElementById("btn-delete");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("leads"));
// localStorage.clear();
// let leadsFromLocalStorage = JSON.parse(localStorage.getItem("leads"));
// console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
  leads = leadsFromLocalStorage;
  renderLeads();
}
//let leads = `["asdfasdfadsfa"]`;

//Turn leads string into an array
//Push a new value to the array
//Turn the array into a string again
//Console log the string using typeofto verify that it's a string
// leads = JSON.parse(leads);
// leads.push("asdfa");
// console.log(leads);

// console.log(typeof leads);
// leads = JSON.stringify(leads);
// console.log(leads);

// localStorage.setItem("leads example", "www.examplelead.com");
// console.log(localStorage.getItem("leads example"));
// localStorage.clear();

btnSave.addEventListener("click", function () {
  leads.push(inputEl.value);
  inputEl.value = "";
  //leads = JSON.stringify(leads);
  localStorage.setItem("leads", JSON.stringify(leads));
  renderLeads();
});

btnDelete.addEventListener("dblclick", function () {
  localStorage.clear();
  leads = [];
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
