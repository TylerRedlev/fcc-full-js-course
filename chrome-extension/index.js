function saveLead() {
  console.log("Lead saved!");
}
let leads = [];
const btnSave = document.getElementById("btn-input");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("list-el");

btnSave.addEventListener("click", function () {
  leads.push(inputEl.value);

  ulEl.innerHTML = "";

  for (i = 0; i < leads.length; i++) {
    //ulEl.innerHTML += "<li>" + leads[i] + "</li>";

    //create li const
    //add element of leads to the list item
    //add to ul through append
    const li = document.createElement("li");
    li.textContent = leads[i];
    ulEl.append(li);
  }
});
