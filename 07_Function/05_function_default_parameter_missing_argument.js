// Function Definition: A function where the first parameter has a default value, second is required

function addition(x = 50, y) {
  console.log(x);
  let sum = x + y;
  return sum;
}

// Function Call: Only one argument is passed, the other uses the default value
let result = addition(10);

console.log("Sum: ", result);
