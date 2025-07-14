// Task: Array Filtering and Mapping

const people = [
  { name: "John", age: 25, gender: "male" },
  { name: "Sarah", age: 30, gender: "female" },
  { name: "Mike", age: 35, gender: "male" },
  { name: "Emily", age: 28, gender: "female" },
  { name: "David", age: 32, gender: "male" },
  { name: "Lisa", age: 27, gender: "female" },
  { name: "Tom", age: 29, gender: "male" }
];

function getMaleNames(peopleArray) {
  return peopleArray
    .filter(person => person.gender === "male") 
    .map(person => person.name);      
}

const maleNames = getMaleNames(people);
console.log("Male names:", maleNames);