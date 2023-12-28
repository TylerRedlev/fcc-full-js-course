//Separator console output function
function separatorConsole(chapterName) {
  const separator = "------------------";
  console.log(`${chapterName} ` + separator);
}

//Event Parameter (e)
document.getElementById("myButton").addEventListener("click", function (event) {
  separatorConsole("Event Parameter (e)");
  // 'e' is the event object
  console.log(event);
});

//Event Properties
document.getElementById("myButton").addEventListener("click", function (e) {
  separatorConsole("Event Properties");
  console.log("Event Type:", e.type);
  console.log("Target Element:", e.target);
  console.log("Mouse Coordinates:", e.clientX, e.clientY);
});

//Preventing Default Behavior
document.getElementById("myForm").addEventListener("submit", function (e) {
  separatorConsole("Preventing Default Behavior");
  e.preventDefault(); // Prevents the default form submission behavior
  // Your custom form handling logic here
});

//Stopping Event Propagation
document.getElementById("childElement").addEventListener("click", function (e) {
  separatorConsole("Stopping Event Propagation");
  e.stopPropagation(); // Stops the click event from reaching parent elements
  // Your click event handling logic here
});
