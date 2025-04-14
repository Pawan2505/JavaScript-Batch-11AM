// ==============================
// Logical Operators in JavaScript
// ==============================

// AND (&&) operator: Both conditions must be true
let x = 10;
let y = 30;
let z = 50;

console.log(x < y && x > z); // false
console.log(x < y && y < z); // true

// OR (||) operator: At least one condition must be true
console.log(x < y || x > z); // true
console.log(x > y || y < z); // true

// NOT (!) operator: Reverses the result
console.log(!(x < y || x > z)); // false
console.log(!(!(x > y) || y < z)); // false

// ==============================
// Variable Swapping
// ==============================

// Swapping using a temporary variable
let a = 10;
let b = 20;

console.log("Before Swap - A:", a, "B:", b);

let temp = a;
a = b;
b = temp;

console.log("After Swap using temp - A:", a, "B:", b);

// Swapping using destructuring
[a, b] = [b, a];

console.log("After Swap using destructuring - A:", a, "B:", b);

// ==============================
// Grade Calculator using if-else if ladder
// ==============================

let marks = parseInt(prompt("Enter your marks"));

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 80) {
  console.log("Grade B");
} else if (marks >= 70) {
  console.log("Grade C");
} else if (marks >= 60) {
  console.log("Grade D");
} else {
  console.log("Failed...");
}
