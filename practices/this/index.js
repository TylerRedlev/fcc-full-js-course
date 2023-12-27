//Global object of 'this'
console.log(this);
console.log(typeof this);

//separator console log function
function separatorConsole(chapterName) {
  const separator = "------------------";
  console.log(`${chapterName} ` + separator);
}

//Method invocation of 'this'
separatorConsole(`Method Invocation`);
const myObject = {
  myMethod: function () {
    console.log(this); // refers to myObject
  },
};

myObject.myMethod();

//Function Invocation of 'this'
separatorConsole(`Function Invocation`);
function myFunction() {
  console.log(this); // refers to the global object (or undefined in strict mode)
}

myFunction();

//Constructor Invocation of 'this'
separatorConsole(`Constructor Invocation`);
function MyClass() {
  this.property = "some value";
  this.someValue = "some value 2";

  console.log(this); // refers to the newly created instance
}

const myInstance = new MyClass();
console.log(myInstance.someValue);

//Event Handlers of 'this'
separatorConsole(`Event Handlers`);
document.getElementById("myButton").addEventListener("click", function () {
  console.log(this); // refers to the button element
});

//Arow functions of this
separatorConsole(`Arrow Functions`);
const myObject2 = {
  myMethod: function () {
    setTimeout(() => {
      console.log(this); // refers to myObject2, not the global object
    }, 1000);
  },
};

myObject2.myMethod();
