// Function Definition: A function with a default parameter value

function addition(x, y = 50) {
  let sum = x + y;
  return sum;
}

// Function Call: If the second argument is not provided, it will use the default value
let result = addition(10, 100);

console.log("Sum: ", result);
