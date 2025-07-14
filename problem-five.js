
// Find and Modify
const people = [
  { name: "John", age: 25, city: "New York" },
  { name: "Sarah", age: 30, city: "Los Angeles" },
  { name: "Mike", age: 35, city: "Chicago" },
  { name: "Emily", age: 28, city: "Boston" },
  { name: "David", age: 32, city: "Miami" }
];

function updatePersonAge(peopleArray, personName, newAge) {
  const person = peopleArray.find(p => p.name === personName);
  
  if (person) {
    const oldAge = person.age;
    person.age = newAge;
    console.log(`Found ${personName}! Updated age from ${oldAge} to ${newAge}`);
    return true;
  } else {
    console.log(`Person with name "${personName}" not found.`);
    return false;
  }
}

const result = updatePersonAge(people, 'Emily', 30); 
console.log(result); 