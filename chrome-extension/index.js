function saveLead() {
  console.log("Lead saved!");
}
let btnInput = document.getElementById("btn-input");

btnInput.addEventListener("click", function () {
  console.log("Lead saved through event listener!");
});
