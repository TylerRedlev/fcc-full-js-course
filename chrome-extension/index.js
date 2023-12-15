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
const btnTab = document.getElementById("btn-save");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("leads"));
const tabs = [{ url: "https://www.linkedin.com/in/per-harald-borgen/" }];

//Get leads from localStorage
if (leadsFromLocalStorage) {
  leads = leadsFromLocalStorage;
  renderLeads(leads);
}

//Save button menu event listener
btnSave.addEventListener("click", function () {
  leads.push(inputEl.value);
  inputEl.value = "";
  //leads = JSON.stringify(leads);
  localStorage.setItem("leads", JSON.stringify(leads));
  renderLeads(leads);
});

btnDelete.addEventListener("dblclick", function () {
  localStorage.clear();
  leads = [];
  renderLeads(leads);
});

btnTab.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    let activeTab = tabs[0];
    let activeTabId = activeTab.id;
    // Do something with url
  });
  //console.log(tabs[0].url);
  leads.push(tabs[0].url);
  localStorage.setItem("leads", JSON.stringify(leads));
});

function renderLeads(leadsArray) {
  ulEl.innerHTML = "";
  let listItems = "";

  for (i = 0; i < leadsArray.length; i++) {
    //listItems += "<li><a target='_blank' href='#'>" + leads[i] + "</a></li>";
    listItems += `<li><a target='_blank' href='#'> ${leadsArray[i]} </a></li>`;
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
