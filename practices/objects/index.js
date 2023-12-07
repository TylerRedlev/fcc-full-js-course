let castle = {
  isCastle: true,
  propertyName: "Castle",
  price: 190,
};

console.log(castle.isCastle);
console.log(castle.propertyName);

let person = {
  name: "Durukan Kizilarslan",
  age: 30,
  country: "Turkey",
};

function logData() {
  return (
    person.name +
    " is " +
    person.age +
    " years old and lives in " +
    person.country
  );
}

logData();
let result = logData();
console.log(result);
