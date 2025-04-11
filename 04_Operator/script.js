// 🔹 Assignment Operators

let x = 10;
let y = "10";

// x += 20;  // Same as: x = x + 20
// console.log(x);  // Output: 30

// Other assignment operators: -=, *=, /=, %=

// 🔹 Comparison Operators
// Used to compare values and data types

x = 10;
y = "10";

console.log(x == y); // true => compares only values
console.log(x === y); // false => compares values and types

console.log(x != y); // false => values are equal
console.log(x !== y); // true => values same, but types are different

// 🔹 Relational Operators
// Used to check relations like greater, smaller, etc.

const data1 = 30;
const data2 = 40;

console.log(data1 > data2); // false
console.log(data1 < data2); // true
console.log(data1 >= data2); // false
console.log(data1 <= data2); // true

// 🔹 Arithmetic Operators
// Used for basic math operations

const a = 12;
const b = 15;

console.log(a + b); // 27
console.log(a - b); // -3
console.log(a / b); // 0.8
console.log(a * b); // 180
console.log(a % b); // 12 => remainder of 12 ÷ 15

// 🔹 Unary Operators
// ++ for increment, -- for decrement

let num = 10;

console.log(num++); // 10 => use first, then increase (post-increment)
console.log(num++); // 11
console.log(num); // 12

console.log(++num); // 13 => increase first, then use (pre-increment)

// 🔹 Decrement Examples

let val = 10;
val = val++ + ++val + --val;

console.log(val); // Complex expression

// 🔹 Mixed Expression Example

let z = 5;
x = 2;

x =
  ++x + // 3 (pre-increment)
  x++ + // 3 (post-increment, becomes 4 after use)
  z-- + // 5 (post-decrement, becomes 4 after use)
  ++z + // 5 (pre-increment back to 5)
  x; // 4 (current value of x)

console.log(x); // Final result: 3 + 3 + 5 + 5 + 4 = 20
