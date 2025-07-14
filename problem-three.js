// Function Composition
function square(num) {
  return num * num;
}

function double(num) {
  return num * 2;
}

function addFive(num) {
  return num + 5;
}

const squareDoubleAddFive = num => addFive(double(square(num)));

console.log("squareDoubleAddFive3(3) =", squareDoubleAddFive(3)); 