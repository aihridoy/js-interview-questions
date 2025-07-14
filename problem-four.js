// Create an array of car objects
const cars = [
  { make: "Toyota", model: "Camry", year: 2018 },
  { make: "Honda", model: "Civic", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2021 },
  { make: "BMW", model: "X3", year: 2019 },
  { make: "Tesla", model: "Model 3", year: 2020 },
  { make: "Chevrolet", model: "Malibu", year: 2016 },
  { make: "Audi", model: "A4", year: 2017 }
];

function sortCarsByYear(carsArray) {
  return carsArray.sort((a, b) => a.year - b.year);
}

const sortedCars = sortCarsByYear([...cars]);
console.log("\nSorted by year (ascending):");
console.log(sortedCars);